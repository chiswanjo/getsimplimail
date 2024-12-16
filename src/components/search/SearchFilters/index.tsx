import React from 'react';
import { Search } from 'lucide-react';
import Button from '../../common/Button';
import CategorySelect from './CategorySelect';
import RangeInput from './RangeInput';
import { SearchFilters as SearchFiltersType } from '../../../types';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onSearch: (filters: SearchFiltersType) => void;
}

export default function SearchFilters({ filters, onSearch }: SearchFiltersProps) {
  const [localFilters, setLocalFilters] = React.useState(filters);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localFilters);
  };

  const handleReset = () => {
    const resetFilters: SearchFiltersType = {
      query: '',
      category: '',
      minFollowers: undefined,
      maxFollowers: undefined,
      minEngagement: undefined,
      maxEngagement: undefined,
      isVerified: undefined
    };
    setLocalFilters(resetFilters);
    onSearch(resetFilters);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              value={localFilters.query}
              onChange={(e) => setLocalFilters(f => ({ ...f, query: e.target.value }))}
              placeholder="Search creators..."
              className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <CategorySelect
          value={localFilters.category}
          onChange={(value) => setLocalFilters(f => ({ ...f, category: value }))}
        />

        <RangeInput
          label="Followers"
          min={localFilters.minFollowers}
          max={localFilters.maxFollowers}
          onMinChange={(value) => setLocalFilters(f => ({ ...f, minFollowers: value }))}
          onMaxChange={(value) => setLocalFilters(f => ({ ...f, maxFollowers: value }))}
          step={1000}
          minPlaceholder="Min followers"
          maxPlaceholder="Max followers"
        />

        <RangeInput
          label="Engagement Rate (%)"
          min={localFilters.minEngagement}
          max={localFilters.maxEngagement}
          onMinChange={(value) => setLocalFilters(f => ({ ...f, minEngagement: value }))}
          onMaxChange={(value) => setLocalFilters(f => ({ ...f, maxEngagement: value }))}
          step={0.1}
          minPlaceholder="Min rate"
          maxPlaceholder="Max rate"
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Verification
          </label>
          <select
            value={localFilters.isVerified === undefined ? '' : String(localFilters.isVerified)}
            onChange={(e) => setLocalFilters(f => ({
              ...f,
              isVerified: e.target.value === '' ? undefined : e.target.value === 'true'
            }))}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="">All Creators</option>
            <option value="true">Verified Only</option>
            <option value="false">Unverified Only</option>
          </select>
        </div>

        <div className="space-y-3 pt-4">
          <Button type="submit" className="w-full">
            Apply Filters
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="w-full"
            onClick={handleReset}
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </form>
  );
}