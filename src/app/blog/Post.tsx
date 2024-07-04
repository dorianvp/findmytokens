import Image from "next/image"
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import { SanityDocument } from "next-sanity"
import { getImageDimensions } from '@sanity/asset-utils'

import { dataset, projectId } from '../../../sanity/env'
import { client } from "../../../sanity/lib/client"

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
		<Image alt=""
			src={imageUrlBuilder({
				clientConfig: client.config(),
			}).image(value).width(800).fit('max').auto('format').url()}
			width={width} height={height} loading="lazy"
		/>
	)
}