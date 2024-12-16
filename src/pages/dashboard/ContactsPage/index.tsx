import React from 'react';
import Container from '../../../components/common/Container';
import SEO from '../../../components/common/SEO';
import ContactList from './ContactList';
import ContactStats from './ContactStats';

export default function ContactsPage() {
  return (
    <>
      <SEO
        title="My Contacts - SimpliMail"
        description="View and manage your unlocked TikTok creator contacts"
        keywords={['contacts', 'creators', 'management']}
      />
      <Container className="py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">My Contacts</h2>
        </div>

        <div className="space-y-6">
          <ContactStats />
          <ContactList />
        </div>
      </Container>
    </>
  );
}