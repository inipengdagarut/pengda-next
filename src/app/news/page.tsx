import type { Post } from '@/types';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Date from '@/components/Date';

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
        <div className='prose'>
            <h1 className='font-serif font-normal text-6xl'>{posts[0].title}</h1>
            <Date time={posts[0].postDate.toDateString()} />
            <div dangerouslySetInnerHTML={{ __html: posts[0].postBody }} />
        </div>
    )
}