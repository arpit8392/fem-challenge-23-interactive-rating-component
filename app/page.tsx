import Image from 'next/image'
import FeedbackForm from './components/FeedbackForm'

export default function Home() {
	return (
		<main className='flex flex-col gap-y-4 rounded-2xl bg-gradialDarkBg p-6 md:gap-y-8 md:rounded-[30px] md:p-8'>
			<div className='flex h-10 w-10 items-center justify-center rounded-full bg-darkBlue md:h-12 md:w-12 md:max-w-sm'>
				<Image
					src={'/images/icon-star.svg'}
					alt='Star Image in Circle for Decoration'
					width={14}
					height={14}
					className='block md:hidden'
				/>
				<Image
					src={'/images/icon-star.svg'}
					alt='Star Image in Circle for Decoration'
					width={17}
					height={16}
					className='hidden md:block'
				/>
			</div>
			<div className='flex flex-col gap-y-4'>
				<h1 className='text-2xl font-bold md:text-3xl'>How did we do?</h1>
				<p className='max-w-xs text-sm leading-6 text-lightGrey md:max-w-sm md:text-base md:leading-7'>
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>
			</div>
			<FeedbackForm />
		</main>
	)
}
