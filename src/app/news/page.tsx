import type { Post } from '@/types';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';


import Date from '@/components/Date';
import SectionTitle from '@/components/SectionTitle';
import { Separator } from '@radix-ui/react-separator';
import PostList from '@/components/PostList';

const fetchPosts = async (): Promise<Post[]> => {
    const postsCollection = collection(db, 'posts');
    const postsSnapshot = await getDocs(postsCollection);
    return postsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        postDate: doc.data().postDate.toDate()
    })) as Post[];
};

export default async function Page() {
    const posts = await fetchPosts();
    return (
        <div className='container mx-auto lg:flex flex-row-reverse gap-8'>
            <div className='lg:w-1/4'>
                tags
            </div>
            <div className="border-l" />
            <div className='lg:w-3/4 lg:mt-8'>
                <SectionTitle title="Berita" size='xl' />
                <div className='mt-8'>
                    <ul>
                        {
                            posts.map((post, idx) => (
                                <li key={idx}>
                                    <PostList 
                                        title={post.title}
                                        excerpt={post.excerpt}
                                        slug={`/news/${post.slug}`}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}