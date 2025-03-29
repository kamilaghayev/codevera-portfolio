export const AboutCard = ({ parentTag = 'div', name = "Development of Websites", description = "Description of this service", categories = [ "E-Commerce", "Blog" ]}) => {
	const ParentTag = parentTag
	return (
		<ParentTag className="w-full max-w-[450px] aspect-square max-h-[330px] bg-[#F5F5F5] text-[#141414] rounded-3xl px-7 py-6 flex flex-col justify-between gap-4">
			<h3 className="text-2xl font-semibold">{name}</h3>
			<div className="flex flex-col gap-4 h-[155px]">
				<p className="text-lg line-clamp-2">
					{description}
				</p>
				<div className="w-full flex gap-2 flex-wrap max-h-[72px] overflow-y-scroll">
					{categories?.map((category, index) => (
						<div key={index} className="px-3 py-1 bg-[#E6E6E6] text-[#141414] rounded-full text-base font-medium">
						    {category}
					    </div>
					))}
				</div>
			</div>
		</ParentTag>
	)
}