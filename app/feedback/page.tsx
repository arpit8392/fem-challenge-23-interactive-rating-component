import Image from 'next/image'

type Props = {
	searchParams: {
		stars: number
	}
}
const Feedback = ({ searchParams: { stars } }: Props) => {
	return (
		<main className='flex flex-col gap-y-7 md:gap-y-8 rounded-2xl bg-gradialDarkBg px-6 py-9 text-center md:rounded-[30px] md:px-8 md:py-11'>
			<div className='flex flex-col items-center justify-center gap-y-6 md:gap-y-8 '>
				<Image
					src={'/images/illustration-thank-you.svg'}
					alt='Illustration Image for Decoration'
					width={144}
					height={96}
					className='block md:hidden'
				/>
				<Image
					src={'/images/illustration-thank-you.svg'}
					alt='Illustration Image for Decoration'
					width={162}
					height={108}
					className='hidden md:block'
				/>
				<div className='rounded-full bg-darkBlue px-4 md:px-5 py-1'>
					<h1 className='text-sm text-orange md:text-base'>{`You selected ${stars} out of 5`}</h1>
				</div>
			</div>
			<div className='flex flex-col gap-y-4'>
				<h2 className='text-2xl font-bold md:text-3xl'>Thank you!</h2>
				<p className='max-w-xs text-sm leading-6 md:text-base md:max-w-sm text-lightGrey'>
					We appreciate you taking the time to give a rating. If you ever need
					more support, don’t hesitate to get in touch!
				</p>
			</div>
		</main>
	)
}
export default Feedback
