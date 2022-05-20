import { NextPage } from "next";
import PostPreview from "../../components/PostPreview";
import MainLayout from "../../layouts/main";
import { fetchEntries } from "../../contentful";

const BlogPage: NextPage = ({ posts }) => {
    console.log(posts);
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

export const getServerSideProps = async () => {
    const res = await fetchEntries({
        content_type: 'product'
    });

    const posts = res?.map(p => p.fields);

    return {
        props: {
            posts
        }
    }
}

export default BlogPage;