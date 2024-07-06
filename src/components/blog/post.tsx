import Image from "next/image"
import { PortableText } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import { SanityDocument } from "next-sanity"
import { SanityImageSource, getImageDimensions } from '@sanity/asset-utils'
import { dataset, projectId } from '../../../sanity/env'
import { client } from "../../../sanity/lib/client"
import React from "react"
import Link from "next/link"

const urlFor = (source: any) =>
	imageUrlBuilder({ projectId, dataset }).image(source)
export default function Post({ post }: { post: SanityDocument }) {
	const { title, mainImage, body } = post

	return (
		<main className="container mx-auto prose prose-lg p-4 text-slate-200">
			{mainImage ? (
				<Image
					className="mb-5 w-full mr-4 rounded-lg"
					src={urlFor(mainImage).fit('max').quality(100).url()}
					width={0}
					height={0}
					sizes="100vw"
					layout="responsive"
					style={{ width: '100%', height: 'auto' }}
					alt={mainImage.alt || ""}
				/>
			) : null}
			{title ? <h1 className="text-inherit text-center">{title}</h1> : null}

			{body ? <PortableText

				value={body}
				components={{
					types: {
						image: SampleImageComponent,
					},
					block: {
						normal: (props) => <p className="text-lg">{props.children}</p>,
					},
					marks: {
						link: ({ children, value }) => {
							const rel = !value.href.startsWith("/")
								? "noopener noreferrer"
								: undefined
							return (
								<Link className="no-underline text-danger" href={value.href} rel={rel}>
									{children}
								</Link>
							)
						},
						strong: ({ children }) => <b className="text-slate-200 font-mono">{children}</b>,
					}
				}}
			/> : null}
		</main>
	)
}

const SampleImageComponent = ({ value }: { value: SanityImageSource }) => {
	const { width, height } = getImageDimensions(value)
	return (
		<Image
			alt=""
			src={imageUrlBuilder({
				clientConfig: client.config(),
			}).image(value).width(800).fit('max').auto('format').url()}
			width={width} height={height} loading="lazy"
		/>
	)
}