import type { BlogPost } from './blogpost.ts';

// Dynamic import function to load all blog posts
async function loadBlogPosts(): Promise<BlogPost[]> {
  const blogModules = import.meta.glob('./*.ts', { eager: true });
  const posts: BlogPost[] = [];
  
  for (const [path, module] of Object.entries(blogModules)) {
    // Skip the index file itself
    if (path === './index.ts') continue;
    
    // Extract the default export or named export
    const moduleExports = module as any;
    
    // Look for the blog post export (could be default export or named export)
    const blogPost = moduleExports.default || 
                    Object.values(moduleExports).find((exp: any) => 
                      exp && typeof exp === 'object' && exp.id && exp.title && exp.slug
                    );
    
    if (blogPost) {
      posts.push(blogPost as BlogPost);
    }
  }
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Load blog posts synchronously using eager loading
const blogModules = import.meta.glob('./*.ts', { eager: true });
export const blogPosts: BlogPost[] = [];

for (const [path, module] of Object.entries(blogModules)) {
  // Skip the index file itself
  if (path === './index.ts') continue;
  
  // Extract the blog post export
  const moduleExports = module as any;
  const blogPost = moduleExports.default || 
                  Object.values(moduleExports).find((exp: any) => 
                    exp && typeof exp === 'object' && exp.id && exp.title && exp.slug
                  );
  
  if (blogPost) {
    blogPosts.push(blogPost as BlogPost);
  }
}

// Sort posts by date (newest first)
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export type { BlogPost };

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getCategories = (): string[] => {
  const categories = blogPosts.map(post => post.category);
  return Array.from(new Set(categories));
};