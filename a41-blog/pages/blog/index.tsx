import { NextPage } from "next";
import PostPreview from "../../components/PostPreview";
import MainLayout from "../../layouts/main";

const BlogPage: NextPage = () => {
    return <MainLayout>
        <div className="columns">
            <div className="column is-one-third">
                <PostPreview
                    author="Mateusz Jablonski"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem, voluptas doloremque nemo mollitia laudantium cupiditate veniam corrupti deserunt porro?"
                    date="2022-05-21"
                    title="Workshops"
                    image="https://bulma.io/images/placeholders/1280x960.png"
                />
            </div>
        </div>
    </MainLayout>
}

export default BlogPage;