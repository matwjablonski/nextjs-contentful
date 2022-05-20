import { FC } from "react";

interface PostPreviewProps {
    author: string;
    content: string;
    image: string;
    title: string;
    date: string;
}

const PostPreview: FC<PostPreviewProps> = ({ author, content, title, date, image }) => (
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={image} alt="Placeholder image" />
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
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{author}</p>
                </div>
            </div>

            <div className="content">
                {content}
                <a href="#">#css</a> <a href="#">#responsive</a>
                <div>
                    <time>{date}</time>
                </div>
            </div>
        </div>
    </div>
)

export default PostPreview