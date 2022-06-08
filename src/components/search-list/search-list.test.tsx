import { screen, render, fireEvent } from '@testing-library/react';
import SearchList from '.';
import { Country } from '../../types/country';

const CLEAR_BUTTON = 1;

const mockCountries: Country[] = [
  {
    name: 'Spain',
    native: 'España',
    capital: 'Madrid',
    currency: 'EUR',
    languages: [],
    states: [],
  },
  {
    name: 'United Kingdom',
    native: 'United Kingdom',
    capital: 'London',
    currency: 'GBP',
    languages: [],
    states: [],
  },
];

const expectedFilteredList = [
  {
    name: 'Spain',
    native: 'España',
    capital: 'Madrid',
    currency: 'EUR',
    languages: [],
    states: [],
  },
];

test('should list of countries', () => {
  render(<SearchList countries={mockCountries} onSelect={() => {}} />);
  const listOfCountries = screen.getAllByRole('button');
  const input = screen.getByPlaceholderText('Country name');
  expect(listOfCountries.length).toBe(mockCountries.length + CLEAR_BUTTON);
  fireEvent.change(input, { target: { value: 'spain' } });
  expect((input as HTMLInputElement).value).toBe('spain');
  const modifiedList = screen.getAllByRole('button');
  expect(modifiedList.length).toBe(expectedFilteredList.length + CLEAR_BUTTON);
});
