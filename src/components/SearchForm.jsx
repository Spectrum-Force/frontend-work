import React from 'react'

const SearchForm = () => {
	return (
			<form className='flex justify-between items-center gap-20 px-20'>
				<div className='grid gap-2'>
					<label className='text-[#6f6f6f] font-poppins font-semibold'>
						SEARCH KEYWORD
					</label>
					<input
						className='px-6 py-2 focus:outline-none border-solid border-2 border-slate-200 rounded-md'
						type="text"
						placeholder='SEARCH'
					/>
				</div>
				<div className='grid gap-2 '>
					<label className='text-[#6f6f6f] font-poppins font-semibold'>All Locations</label>
					<select className='px-6 py-2 focus:outline-none border-solid border-2 border-slate-200 rounded-md' name="location" id="">
						<option value="kotobabi">About</option>
						<option value="kasoa">Allstates Arena</option>
						<option value="Mallam">Arena Rega</option>
						<option value="NewTown">Berlin Arena</option>
						<option value="Alajo">Berlin Arena2</option>
						<option value="Nima">first Niagara Center</option>
						<option value="Nima">first Niagara Center(Buffalo,NY)</option>
						<option value="Nima">Gillette Stadium(Foxborough,MA)</option>
						<option value="Nima">Golf Field Belek</option>
						<option value="Nima">Griece Marathon</option>
						<option value="Nima">IF3 Hall</option>
						<option value="Nima">La Taraza</option>
						<option value="Nima">Lincoln Financial (Philadelphia, PA)</option>
						<option value="Nima">Nael Blaisdel Arena</option>
						<option value="Nima">Palace of Auburn Arena</option>
						<option value="Nima">Ral man Havana</option>
						<option value="Nima">Rio Olympic Hall</option>
						<option value="Nima">Rose Bowl Pasadena</option>
						<option value="Nima">Nice,France</option>
						<option value="Nima">Nice,France</option>
					</select>
				</div>
				<div className='grid gap-2'>
					<label className='text-[#6f6f6f] font-poppins font-semibold'>Event Months</label>
					<select className='px-6 py-2 focus:outline-none border-solid border-2 border-slate-200 rounded-md' name="location" id="">
						<option value="kotobabi">All Dates</option>
						<option value="kasoa">June,2024</option>
						<option value="Mallam">July,2024</option>
						<option value="NewTown">August,2024</option>
						<option value="Alajo">September,2024</option>
						<option value="Nima">October,2024</option>
						<option value="Nima">November,2024</option>
						<option value="Nima">December,2024</option>
						<option value="Nima">January,2025</option>
						<option value="Nima">February,2025</option>
					</select>
				</div>
				<div className='mt-8'>
					<button
						className='px-8 py-2 border-solid border-2 border-[#ff6600] 
							text-md text-[#ff6600] rounded-md hover:bg-[#ff6600] hover:text-white transition-all'
						type='submit'>
						SEARCH
					</button>
				</div>
			</form>
	)
}

export default SearchForm