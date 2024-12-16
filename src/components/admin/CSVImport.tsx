import React, { useState, useRef } from 'react';
import { Upload, AlertCircle, CheckCircle } from 'lucide-react';
import Button from '../common/Button';
import { parseCSV, validateCSVRow, convertCSVRowToCreator, CSVRow } from '../../utils/csv';
import { supabase } from '../../lib/supabase/client';

interface CSVImportProps {
  onSuccess: () => void;
}

export default function CSVImport({ onSuccess }: CSVImportProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [successCount, setSuccessCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);
    setValidationErrors([]);
    setSuccessCount(0);

    try {
      const text = await file.text();
      const rows = parseCSV(text);
      
      // Validate all rows first
      const allErrors: string[] = [];
      rows.forEach((row: CSVRow, index) => {
        const rowErrors = validateCSVRow(row);
        if (rowErrors.length > 0) {
          allErrors.push(`Row ${index + 1}: ${rowErrors.join(', ')}`);
        }
      });

      if (allErrors.length > 0) {
        setValidationErrors(allErrors);
        return;
      }

      // Insert valid rows
      const { error: insertError, count } = await supabase
        .from('creators')
        .insert(rows.map(convertCSVRowToCreator));

      if (insertError) throw insertError;

      setSuccessCount(count || 0);
      onSuccess();
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
          id="csv-upload"
        />
        <Button
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={loading}
          className="flex items-center"
        >
          <Upload className="w-4 h-4 mr-2" />
          {loading ? 'Importing...' : 'Import CSV'}
        </Button>
        {successCount > 0 && (
          <div className="flex items-center text-green-600">
            <CheckCircle className="w-4 h-4 mr-1" />
            {successCount} creators imported
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-start">
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
          <div>{error}</div>
        </div>
      )}

      {validationErrors.length > 0 && (
        <div className="bg-yellow-50 text-yellow-800 p-3 rounded-md">
          <h4 className="font-semibold mb-2">Validation Errors:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-sm text-gray-600">
        <p className="font-medium mb-2">CSV Format:</p>
        <code className="bg-gray-100 p-2 rounded block">
          username,fullName,email,avatarUrl,followersCount,category,engagementRate,isVerified,contactPrice
        </code>
      </div>
    </div>
  );
}