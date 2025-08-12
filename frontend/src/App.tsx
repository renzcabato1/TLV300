import { useState } from 'react'
import './assets/styles/App.css'

import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Footer from './components/Footer'
import Loading from './components/Loading'
import { ContactInformationType, DomainInformationType, DomainType } from './types'
import { getDomainDetails } from './action/domain'
import { truncateString } from './utils/stringFormat'
import bg from './assets/img/background.jpg'

// Default object structure for domain details
const domainDetailsOBJ = {
	domainInformation: {
		domainName: '',
		registrar: '',
		registrationDate: '',
		expirationDate: '',
		estimatedDomainAge: 0,
		hostnames: ''
	},
	contactInformation: {
		registrantName: '',
		technicalContactName: '',
		administrativeContactName: '',
		contactEmail: ''
	}	
}

function App() {

	// State to store domain details that will be display in tabled format
	const [domainDetails, setDomainDetails] = useState<{ domainInformation: DomainInformationType, contactInformation: ContactInformationType }>(domainDetailsOBJ)

	// State for error handling if domain details fetching fails
	const [error, setError] = useState('')

	// State for loading indicator when fetching domain details
	const [loading, setLoading] = useState(false)

	// Handles form submission to fetch domain details
	const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>, domain: DomainType) => {
		e.preventDefault();
		
		if(!domain) {
			setError('');
			return setDomainDetails(domainDetailsOBJ);
		}
		setLoading(true);

		// Fetch domain details from API
		const response = await getDomainDetails(domain);

		setLoading(false);
		if(!response.success) return setError(response.message);

		// Update state with fetched data
		setError('');
		setDomainDetails(response.data)
	}

	 // State to toggle the display of domain and contact information
	const [displayInfo, setDisplayInfo] = useState<{ domain: boolean, contact: boolean }>({
		domain: true, contact: true
	})

	// Handles toggling display of domain and contact details
	const handleToggleDisplay = (infotype: string) => {
		if(infotype === 'domain') {
			if(displayInfo.domain){
				if(displayInfo.contact) {
					setDisplayInfo({ domain: false, contact: true })
					return;
				}
			}else{
				setDisplayInfo({ domain: true, contact: true })
				return;
			}

		}

		if(infotype === 'contact') {
			if(displayInfo.contact){
				if(displayInfo.domain) {
					setDisplayInfo({ domain: true, contact: false })
					return;
				}
			}else{
				setDisplayInfo({ domain: true, contact: true })
			}
		}
	}

  return (
    <div className='App overflow-x-hidden flex flex-col justify-between items-center w-full'>
		<img src={bg} alt="" className='w-full h-full absolute rigth-0 top-0 z-0' />
		<div className='w-full relative z-10'>
			<Header />
			<div className='max-w-[1400px] mx-auto w-full px-4 my-20 md:my-28'>
				<h1 className='text-center text-4xl font-semibold text-fontprimary mt-10'>Get Domain & WHOIS Information Instantly</h1>
				<p className='text-center text-lg text-[#dedede] mt-4'>Enter a domain name to retrieve WHOIS details, including ownership, contact information, and registration data.</p>
				<div className='w-full flex flex-col items-center justify-center'>
					<div className='max-w-4xl w-full mt-10'>
						<SearchForm handleSearchSubmit={handleSearchSubmit} handleToggleDisplay={handleToggleDisplay} displayInfo={displayInfo} />
						{
							loading ?
							<div className='mt-10'>
								<Loading /> 
							</div> :
							error ?
							<p className='text-red-600 text-center mt-10'>{error}</p> :
							domainDetails.domainInformation.domainName &&
							<div className='mt-20 w-full'>
								{
									displayInfo.domain &&
									<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
										<table className="w-full text-sm text-left text-gray-500">
											<caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
												Domain Information
											</caption>
											<tbody>
												<tr className="bg-white hover:bg-gray-50 border-b border-gray-200">
													<th scope="col" className="px-6 py-3">
														Domain Name
													</th>
													<th scope="col" className="px-6 py-3">
													Registrar
													</th>
													<th scope="col" className="px-6 py-3">
													Registration
													Date
													</th>
													<th scope="col" className="px-6 py-3">
													Expiration
													Date
													</th>
													<th scope="col" className="px-6 py-3">
													Estimated
													Domain Age
													</th>
													<th scope="col" className="px-6 py-3">
													Hostnames
													</th>
													
												</tr>
												<tr className="bg-white hover:bg-gray-50 border-b  border-gray-200">
													<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
														{ domainDetails.domainInformation.domainName }
													</th>
													<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
														{ domainDetails.domainInformation.registrar }
													</th>
													<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
														{ domainDetails.domainInformation.registrationDate }
													</th>
													<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
														{ domainDetails.domainInformation.expirationDate }
													</th>
													<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
														{ domainDetails.domainInformation.estimatedDomainAge } days
													</th>
													<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
														{ truncateString(domainDetails.domainInformation.hostnames) }
													</th>
												</tr>
											</tbody>
										</table>
									</div>
								}
								{
									displayInfo.contact &&
									<div className="relative overflow-x-auto mt-10 shadow-md sm:rounded-lg">
										<table className="w-full text-sm text-left text-gray-500">
											<caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
												Contact Information:
											</caption>
											<tbody>
												<tr className="bg-white hover:bg-gray-50 border-b border-gray-200">
													<th scope="col" className="px-6 py-3">
														Registrant Name
													</th>
													<th scope="col" className="px-6 py-3">
														Technical Contact Name
													</th>
													<th scope="col" className="px-6 py-3">
														Administrative Contact Name
													</th>
													<th scope="col" className="px-6 py-3">
														Contact Email
													</th>
													
												</tr>
												<tr className="bg-white hover:bg-gray-50 border-b  border-gray-200">
													<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
														{  domainDetails.contactInformation.registrantName }
													</th>
													<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
														{ domainDetails.contactInformation.technicalContactName }
													</th>
													<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
														{ domainDetails.contactInformation.administrativeContactName }
													</th>
													<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
														{ domainDetails.contactInformation.contactEmail }
													</th>
												</tr>
											</tbody>
										</table>
									</div>
								}
							</div>
						}
					</div>
				</div>
			</div>
		</div>
		<Footer />
    </div>
  )
}

export default App
