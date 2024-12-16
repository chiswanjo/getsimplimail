import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { useUnlockedContacts } from '../../../hooks/useUnlockedContacts';
import LoadingSpinner from '../../../components/common/LoadingSpinner';

export default function ContactList() {
  const { contacts, loading, error } = useUnlockedContacts();

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-md">
        {error.message}
      </div>
    );
  }

  if (!contacts?.length) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
        <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No contacts yet</h3>
        <p className="text-gray-600">
          Start searching for creators and unlock their contact information.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="bg-white p-6 rounded-lg border border-gray-200 flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <img
              src={contact.creator.avatar_url}
              alt={contact.creator.full_name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">{contact.creator.full_name}</h3>
              <p className="text-gray-600 text-sm">@{contact.creator.username}</p>
              <a
                href={`mailto:${contact.creator.email}`}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center mt-1"
              >
                {contact.creator.email}
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Unlocked on {new Date(contact.created_at).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}