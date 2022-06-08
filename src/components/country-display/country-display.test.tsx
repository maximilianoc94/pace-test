import { screen, render } from '@testing-library/react';
import CountryDisplay from '.';
import { Country } from '../../types/country';

const mockCountry: Country = {
  name: 'Spain',
  native: 'España',
  capital: 'Madrid',
  currency: 'EUR',
  languages: [],
  states: [],
};

test('should render country fields', () => {
  render(<CountryDisplay country={mockCountry} goBack={() => {}} />);
  expect(screen.getByText(mockCountry.name)).toBeInTheDocument();
  expect(screen.getByText(mockCountry.native)).toBeInTheDocument();
  expect(screen.getByText(mockCountry.capital)).toBeInTheDocument();
  expect(screen.getByText(mockCountry.currency)).toBeInTheDocument();
});
