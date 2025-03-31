import { AboutCard, MoreButton } from "@/components"

export const AboutUs = () => {

	const aboutUsData = [
		{
			name: "Development of websites",
			description: "As CodeVera, our main goal is to ensure that our clients' websites operate securely and flawlessly.",
			categories: ["Landing Page", "E-Commerce", "Blog", "Business"]
		},
		{
			name: "Development of ERP systems",
			description: "ERP (Enterprise Resource Planning) systems are integrated software that automates the financial, human resources, sales, and other processes of an enterprise. These systems optimize business processes and accelerate information exchange.",
			categories: ["ERP", "CRM", "HRM", "POS"]
		},
		{
			name: "Mobile application development",
			description: "We develop functional and easy-to-use mobile applications for your business on Android and iOS platforms.",
			categories: ["E-Commerce", "Blog", "Landing Page", "Business"]
		},
		{
			name: "Corporate Email preparation",
			description: "Reach customers more easily, increase your sales, and strengthen your brand with corporate email services for your business.",
			categories: ["E-Commerce", "Blog", "ERP", "Business"]
		},
	]

	return (
		<section id="about" aria-labelledby='about-us'>
			<div className='container-center flex flex-col lg:flex-row lg:justify-between gap-10 sm:gap-14 lg:gap-20 mt-36'>
				<div className='flex flex-col items-center md:items-start gap-6 sm:gap-8 lg:gap-10 w-full lg:w-[40%] lg:max-w-[480px]'>
					<h2 id='about-us' className='text-3xl sm:text-4xl lg:text-6xl font-semibold'>About us</h2>
					<p className='text-sm sm:text-base lg:text-lg text-center md:text-left'>
						CodeVera as a team offers quality and reliable service with digital solutions, 
						websites, ERP systems, mobile applications, email services, integration of payment 
						systems and other services.
					</p>
					<MoreButton />
				</div>
				<ul className="w-full lg:w-[60%] grid justify-items-center md:grid-cols-2 gap-6 lg:justify-items-end">
					{aboutUsData?.map((item, index) => (
						<AboutCard
						    key={index}
						    parentTag='li'
							name={item.name}
							description={item.description}
							categories={item.categories}
						/>
					))}
				</ul>
			</div>
		</section>
	)
}