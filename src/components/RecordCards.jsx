import React from 'react'

const RecordCards = (props) => {
  return (
    <div className='flex items-center pt-10 px-20'>
      <div className='bg-[#FAFAFA] flex justify-between p-10  w-full'>
				<div className='w-[70%] space-y-10'>
					<div>
						<h2 className='text-[24px] text-[#6F6F6F] font-semibold' >{props.title}</h2>
					</div>
					<hr className='w-full h-[4px]'/>
					<div className='flex justify-between'> 
						<div className='grid '>
							<h3 
								className='text-[16px] text-[#6F6F6F] font-semibold'>
								Venue
							</h3>
							<p className='text-[14px] text-[#6F6F6F]'>
								{props.venue}
							</p>
						</div>
						<div>
							<h3>Friday</h3>
							<p>{props.date.toLocaleDateString()}</p>
						</div>
						<div>
							<h3>Time</h3>
							<p>{props.time.toLocaleTimeString()}</p>
						</div>
					</div>
				</div>
				<div className=''>
					<p>Price From</p>
					<p>{props.price}</p>
					<button
						className='bg-[#ff6600] px-10 border-solid border-2 border-[#ff6600] py-4 
							text-white font-semibold rounded-md hover:bg-white hover:text-[#ff6600] hover:border-solid 
							transition-all' 
						type='submit'>
						Book Ticket
					</button>
				</div>
			</div>
    </div>
  )
}

export default RecordCards