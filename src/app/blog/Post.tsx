import Image from "next/image"
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import { SanityDocument } from "next-sanity"
import { getImageDimensions } from '@sanity/asset-utils'

import { dataset, projectId } from '../../../sanity/env'
import urlBuilder from "@sanity/image-url"

const urlFor = (source: any) =>
	imageUrlBuilder({ projectId, dataset }).image(source)
export default function Post({ post }: { post: SanityDocument }) {
	const { title, mainImage, body } = post

	return (
		<main className="container mx-auto prose prose-lg p-4">
			{title ? <h1>{title}</h1> : null}
			{mainImage ? (
				<Image
					className="float-left m-0 w-1/3 mr-4 rounded-lg"
					src={urlFor(mainImage).width(300).height(300).quality(80).url()}
					width={300}
					height={300}
					alt={mainImage.alt || ""}
				/>
			) : null}
			{body ? <PortableText value={body} components={{
				types: {
					image: SampleImageComponent
				}
			}} /> : null}
		</main>
	)
}

const SampleImageComponent = ({ value }) => {
	const { width, height } = getImageDimensions(value)
	return (
		<img
			src={urlBuilder().image(value).width(800).fit('max').auto('format').url()}
			alt={value.alt || ' '}
			loading="lazy"
			style={{
				// Avoid jumping around with aspect-ratio CSS property
				aspectRatio: width / height,
			}}
		/>
	)
}