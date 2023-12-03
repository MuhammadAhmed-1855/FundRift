import React, { useEffect, useState } from 'react';
import { useStateContext } from '../context';
import { useParams } from 'react-router-dom';
import { DisplayCampaigns } from '../components';

const SearchCampaign = () => {
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const value = useParams().value;
  const {getCampaigns, address, contract} = useStateContext();

  const fetchCampaigns = async () => {
    const data = await getCampaigns();
    const filtered = await data.filter((campaign) => campaign.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredCampaigns(filtered);
    setIsLoading(false);
  }

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract, value])

  const searchTitle = `Search Results for "${value}"`;

  return (
    <div>
        {filteredCampaigns.length > 0 ? (
            <div>
                <DisplayCampaigns 
                    title={searchTitle}
                    isLoading={isLoading}
                    campaigns={filteredCampaigns}
                />
            </div>
        ): (
            <div>
                <h1>No Campaigns Found</h1>
            </div>
        )}
    </div>
  );
}

export default SearchCampaign;
