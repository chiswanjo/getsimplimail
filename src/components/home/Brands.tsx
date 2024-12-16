import React from 'react';
import Container from '../common/Container';

export default function Brands() {
  return (
    <section className="py-12 border-t border-gray-200">
      <Container>
        <p className="text-center text-gray-600 mb-8">
          Trusted by brands worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* Using div elements with company names for simplicity */}
          {['Nike', 'Adidas', 'Puma', 'Under Armour', 'New Balance'].map((brand) => (
            <div
              key={brand}
              className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}