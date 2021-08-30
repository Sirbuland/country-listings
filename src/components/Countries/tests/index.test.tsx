import React from 'react'
import { MockedProvider } from '@apollo/client/testing';
import { create } from 'react-test-renderer'
import Countries from '..';
import { countriesMockedData, countryMockData } from '../../../testUtils/countriesMockedData';

describe('Countries List', () => {
  it('renders without error', async () => {

    const root = create(
      <MockedProvider mocks={[countriesMockedData, countryMockData]} addTypename={false}>
        <Countries />
      </MockedProvider>
    )

    const tree = root.toJSON()
    expect(tree.children.length).toBe(2)
    
  });  
})
