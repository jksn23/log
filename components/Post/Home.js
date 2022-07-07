import PostList from '@/components/Post/List'
import Decoration from '@/components/Icons/Decoration'

export default function MoreStories ({ posts, lang = 'id' }) {
  return (
    <section data-test-id="home-post" className="relative">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-5 md:gap-y-8 mb-8">
        <PostList posts={posts} lang={lang} showExcerpt />
      </div>
      <Decoration className="absolute z-0 blur-[200px] right-0 top-2/4 z-0 dark:text-red-500 text-red-500/50" />
    </section>
  )
}
