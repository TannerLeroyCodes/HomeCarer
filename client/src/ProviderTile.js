import React from 'react'

function ProviderTile({provider}) {
  return (
  <div className="card">
  <div>Provider Tile</div>
  <div>Name: {provider.first_name} {provider.last_name}</div>
  <div>Location: {provider.provider_bio.location}</div>
  <div>Certified Nurse Aide: {provider.provider_bio.certified_nurse_aide ? "True" : "False"}</div>
  <div>Registered Nurse: {provider.provider_bio.registered_nurse ? "True" : "False"}</div>
  <div>Years in Healthcare: {provider.provider_bio.year_in_healthcare}</div>
  <div>Accepts Personal Care Appointments: {provider.provider_bio.personal_care ? "Yes" : "No" }</div>
  <div>Accepts Nursing Care Appointments: {provider.provider_bio.nursing_care ? "Yes" : "No" }</div>
  <div>Rate: {provider.provider_bio.rate} Dollars per hour</div>
  <div>Provider Bio: {provider.provider_bio.description}</div>
   </div>
  )
}

export default ProviderTile