import { FC } from "react";
import Image from 'next/image';
import Link from 'next/link'

interface PostPreviewProps {
    author: string;
    content: string;
    image: string;
    title: string;
    date: string;
    slug: string;
}

const PostPreview: FC<PostPreviewProps> = ({ author, content, title, date, image, slug }) => (
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Image src={`https:${image}`} alt="Abc" width={"100%"} height={"100%"} layout="responsive"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">
                        <Link href={`/blog/${slug}`}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </p>
                    <p className="subtitle is-6">{author}</p>
                </div>
            </div>

            <div className="content">
                {content}
                <div>
                    <time>{date}</time>
                </div>
            </div>
        </div>
    </div>
)

export default PostPreview