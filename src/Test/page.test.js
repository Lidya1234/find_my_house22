import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Page from '../components/Page';
import '@testing-library/jest-dom/extend-expect';

describe('The navigation bar should contain', () => {
  it('House logo', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Page />
      </MemoryRouter>,
    );
    const link = getByText('1/64');
    expect(link).toBeInTheDocument();
  });
  const component = renderer.create(
    <MemoryRouter>
      <Page />
    </MemoryRouter>,
  ).toJSON();

  test('Matchs snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
