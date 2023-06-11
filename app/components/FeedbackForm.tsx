'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { RadioGroup } from '@headlessui/react'

function classNames(...classes: Array<string>): string {
	return classes.filter(Boolean).join(' ')
}

const FeedbackForm = () => {
	const starsArray = Array.from({ length: 5 }, (_, i) => i + 1)
	const [stars, setStars] = useState<number | null>(null)
	const router = useRouter()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!stars) return
		router.push(`/feedback?stars=${stars}`)
	}
	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col gap-y-6 pt-2 md:gap-y-8'>
			<RadioGroup value={stars} onChange={setStars} name='stars'>
				<RadioGroup.Label as='span' className='sr-only'>
					Select the rating
				</RadioGroup.Label>
				<div className='flex flex-wrap justify-around gap-4 md:gap-5'>
					{starsArray.map((item) => (
						<RadioGroup.Option
							key={item}
							value={item}
							className={({ active, checked }) =>
								classNames(
									active && checked
										? 'bg-orange text-white'
										: 'bg-darkBlue text-mediumGrey',
									'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold  hover:cursor-pointer hover:bg-mediumGrey hover:text-white  md:h-14 md:w-14 md:text-base md:text-base'
								)
							}>
							<RadioGroup.Label as='span' className='sr-only'>
								{item}
							</RadioGroup.Label>
							<span>{item}</span>
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>

			<button
				type='submit'
				className='rounded-full bg-orange py-3 text-sm font-bold uppercase tracking-[2px] text-white hover:bg-white hover:text-orange md:text-base'>
				Submit
			</button>
		</form>
	)
}
export default FeedbackForm
