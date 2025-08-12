import search from '../assets/img/search.svg'
import { useState } from 'react'

//SearchForm Component
// 
// This component allows users to input a domain name and submit a search request.
// It also provides toggle options to display domain and contact information.
function SearchForm({ handleSearchSubmit, handleToggleDisplay, displayInfo } : { handleSearchSubmit: any, handleToggleDisplay: any, displayInfo: { domain: boolean, contact: boolean } }) {

	// State to store user input for the domain search
	const [searchValue, setSearchValue] = useState<string>('')
	
  return (
    <form 
		className='w-full' 
		onSubmit={(e) => handleSearchSubmit(e, searchValue)}
	>
        <div className='flex border bg-white border-gray-300 rounded-full pl-6'>
            <input 
				type='text' 
				placeholder='Enter domain name' 
				className='w-full bg-transparent focus:outline-none' 
				onChange={(e) => setSearchValue(e.target.value)} 
			/>
            <button className='bg-[#e7e7e7] text-white rounded-r-full py-4 px-5 ml-2'>
                <img src={search} alt='search' className='w-5 h-5' />
            </button>
        </div>
        <div className='flex justify-center items-center mt-6 flex-col sm:flex-row gap-3 sm:gap-5'>
            <p className='text-[#dedede]'>Display:</p>
            <div className='flex gap-2 flex-col xs:flex-row '>
                <span className={`rounded-full text-[15px] text-center px-3 cursor-pointer ${displayInfo.domain ? 'bg-white text-primary' : 'border border-[#535353] text-fontprimary'}`} onClick={() => handleToggleDisplay('domain')}>Domain Information</span>
                <span className={`rounded-full text-[15px] text-center px-3 cursor-pointer ${displayInfo.contact ? 'bg-white text-primary' : 'border border-[#535353] text-fontprimary'}`} onClick={() => handleToggleDisplay('contact')}>Contact Information</span>
            </div>
        </div>
    </form>
  )
}

export default SearchForm
