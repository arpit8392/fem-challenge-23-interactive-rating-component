'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

const FeedbackForm = () => {
	const feedbackArray = Array.from({ length: 5 }, (_, i) => i + 1)
	const [stars, setStars] = useState<number | null>(null)
	const router = useRouter()

	const handleClick = (value: number) => setStars(value)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!stars) return
		console.log(stars)
		stars && router.push(`/feedback?stars=${stars}`)
	}
	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col gap-y-6 pt-2 md:gap-y-8'>
			<fieldset className='flex flex-wrap justify-around gap-x-4 md:gap-x-5'>
				<legend className='sr-only'>What is your feedback?</legend>
				{feedbackArray.map((item) => (
					<div
						key={item}
						onClick={() => handleClick(item)}
						className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold  hover:cursor-pointer hover:bg-mediumGrey hover:text-white  md:h-14 md:w-14 md:text-base md:text-base ${
							stars === item
								? 'bg-orange text-white'
								: 'bg-darkBlue text-mediumGrey'
						}`}>
						{item}
					</div>
				))}
			</fieldset>

			<button
				type='submit'
				className='rounded-full bg-orange py-3 text-sm font-bold uppercase tracking-[2px] text-white hover:bg-white hover:text-orange md:text-base'>
				Submit
			</button>
		</form>
	)
}
export default FeedbackForm
