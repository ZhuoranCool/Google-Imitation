import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SponsoredAds } from "@/components/sponsored-ads"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  ImageIcon,
  Video,
  Newspaper,
  MapPin,
  MoreHorizontal,
  Settings,
  Grid,
  ChevronDown,
  Clock,
  Filter,
  MoreVertical,
} from "lucide-react"

export default function SearchResults() {
  return (
    <div className="min-h-screen bg-background flex flex-col px-10 py-4">
      {/* Header */}
      <header className="sticky top-0 bg-background z-10">
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/google-logo-black-transparent.png?height=30&width=92"
                alt="Google"
                width={92}
                height={30}
                className="h-[30px]"
              />
            </Link>
            <div className="flex-1 max-w-4xl">
              <div className="relative">
                <Input
                  defaultValue="search query example"
                  className="pl-4 pr-12 py-2 h-12 rounded-full border shadow-sm hover:shadow-md focus-visible:shadow-md"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500">
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Grid className="h-5 w-5" />
              </Button>
              <Button className="rounded-full h-10 w-10 bg-blue-600 text-white hover:bg-blue-700">
                <span className="font-semibold">J</span>
              </Button>
            </div>
          </div>
          {/* tab at head */}
          <Tabs defaultValue="all" className="w-full px-20 border-b">
            <TabsList className="h-10 bg-transparent max-w-4xl justify-start rounded-none p-0 w-full">
              <TabsTrigger
                value="all"
                className="data-[state=active]:border-b-2 border-r-0 border-l-0 border-t-0 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=active]:shadow-none rounded-none h-10 px-4"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="images"
                className="data-[state=active]:border-b-2 border-r-0 border-l-0 border-t-0 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=active]:shadow-none rounded-none h-10 px-4"
              >
                Images
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="data-[state=active]:border-b-2 border-r-0 border-l-0 border-t-0 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=active]:shadow-none rounded-none h-10 px-4"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="news"
                className="data-[state=active]:border-b-2 border-r-0 border-l-0 border-t-0 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=active]:shadow-none rounded-none h-10 px-4"
              >
                News
              </TabsTrigger>
              <TabsTrigger
                value="maps"
                className="data-[state=active]:border-b-2 border-r-0 border-l-0 border-t-0 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=active]:shadow-none rounded-none h-10 px-4"
              >
                Maps
              </TabsTrigger>
              <TabsTrigger
                value="more"
                className="data-[state=active]:border-b-2 border-r-0 border-l-0 border-t-0 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=active]:shadow-none rounded-none h-10 px-4"
              >
                <MoreVertical className="h-4 w-4 mr-2" />
                More
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-4 px-20">
        <div className="items-center flex gap-8">
          {/* SideBar (ignored) */}
          {/* Search Results */}
          <div className="flex-1 max-w-5xl">
            <div className="text-sm text-muted-foreground mb-4">About 1,230,000,000 results (0.42 seconds)</div>
            <SponsoredAds />
            {/* Search Results */}
            <div className="space-y-8 max-w-3xl">
              {/* Result 1 */}
              <div className="space-y-1">
                <div className="flex items-start">
                  <div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">https://example.com</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h2 className="text-xl font-medium text-blue-700 hover:underline">
                      <Link href="#">Example Search Result Title - Main Page</Link>
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This is a description of the search result. It shows a snippet of the content from the webpage that
                  matches the search query. The search terms might be <span className="font-bold">highlighted</span> in
                  the description.
                </p>
              </div>

              {/* Result 2 */}
              <div className="space-y-1">
                <div className="flex items-start">
                  <div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">https://anotherexample.com</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h2 className="text-xl font-medium text-blue-700 hover:underline">
                      <Link href="#">Another Example Result - With Subpages</Link>
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Here's another search result description. This one might have more details about the page content and
                  why it's relevant to the search query that was entered.
                </p>
                <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <Link href="#" className="text-blue-700 hover:underline truncate">
                    Subpage One
                  </Link>
                  <Link href="#" className="text-blue-700 hover:underline truncate">
                    Subpage Two
                  </Link>
                  <Link href="#" className="text-blue-700 hover:underline truncate">
                    Subpage Three
                  </Link>
                  <Link href="#" className="text-blue-700 hover:underline truncate">
                    Subpage Four
                  </Link>
                </div>
              </div>

              {/* Result 3 - Featured Snippet */}
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="font-medium">Featured Snippet from the web</h3>
                <p className="text-sm">
                  A featured snippet is a summary of an answer to a search query, extracted from a webpage. It appears
                  at the top of Google's search results and aims to quickly answer the user's question.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">https://featuredexample.com</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-medium text-blue-700 hover:underline">
                  <Link href="#">Featured Example - Complete Guide</Link>
                </h2>
              </div>

              {/* Result 4 */}
              <div className="space-y-1">
                <div className="flex items-start">
                  <div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">https://fourthexample.com</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h2 className="text-xl font-medium text-blue-700 hover:underline">
                      <Link href="#">Fourth Example Result - Detailed Information</Link>
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This search result might contain more detailed information about the topic. It could include specific
                  keywords that match the search query and provide context about why this page is relevant.
                </p>
              </div>

              {/* Result 5 - People also ask */}
              <div className="border rounded-lg overflow-hidden">
                <h3 className="font-medium p-4 border-b">People also ask</h3>
                <div className="divide-y">
                  <div className="p-4 hover:bg-muted cursor-pointer">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">What is a search engine?</p>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-4 hover:bg-muted cursor-pointer">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">How do search engines work?</p>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-4 hover:bg-muted cursor-pointer">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">What are the most popular search engines?</p>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* More Results */}
              <div className="space-y-1">
                <div className="flex items-start">
                  <div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">https://fifthexample.com</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h2 className="text-xl font-medium text-blue-700 hover:underline">
                      <Link href="#">Fifth Example Result - Additional Content</Link>
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This is another search result with a description that provides context about the webpage content and
                  why it matches the search query that was entered.
                </p>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 pt-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
                  <span>1</span>
                </div>
                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
                  <span>2</span>
                </Link>
                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
                  <span>3</span>
                </Link>
                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
                  <span>4</span>
                </Link>
                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
                  <span>5</span>
                </Link>
                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
                  <span>6</span>
                </Link>
                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
                  <span>7</span>
                </Link>
                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
                  <span>8</span>
                </Link>
                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
                  <span>9</span>
                </Link>
                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
                  <span>10</span>
                </Link>
                <Link href="#" className="flex items-center justify-center ml-2">
                  <span>Next</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-4 mt-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                About
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Advertising
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Business
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                How Search works
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Settings
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

