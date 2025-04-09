import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

interface Product {
  id: string
  image: string
  label?: string
  name: string
  price: string
  originalPrice?: string
  brand: string
  rating: number
  reviews: number
  shipping: string
  specs: string[]
}

export function SponsoredAds() {
  const products: Product[] = [
    {
      id: "1",
      image: "/placeholder.svg?height=200&width=200",
      label: "特价销售",
      name: "Dell XPS 16 Laptop - w/ Windows 11 OS & Intel Core Ultra 7",
      price: "US$1,399.99",
      originalPrice: "1,700",
      brand: "Dell",
      rating: 4,
      reviews: 760,
      shipping: "免运费，4/18前送达",
      specs: ["硬盘容量: 16 GB", "Intel GPU", "USB-C"],
    },
    {
      id: "2",
      image: "/placeholder.svg?height=200&width=200",
      name: 'Lenovo ThinkPad P16s Gen 3 Intel - 16" - Intel Core Ultra',
      price: "US$1,699.00",
      brand: "Lenovo",
      rating: 4.5,
      reviews: 108,
      shipping: "免费送货",
      specs: ["硬盘容量: 512 GB", "NVIDIA GPU"],
    },
    {
      id: "3",
      image: "/placeholder.svg?height=200&width=200",
      label: "价格下降了",
      name: 'Lenovo ThinkPad X1 Carbon Gen 9 - 14" - Lenovo 512GB SSD',
      price: "US$1,151.70",
      brand: "Lenovo",
      rating: 4.5,
      reviews: 2000,
      shipping: "翻新商品",
      specs: [],
    },
    {
      id: "4",
      image: "/placeholder.svg?height=200&width=200",
      name: 'Lenovo ThinkPad X1 Carbon Gen 12 Intel - 14" - 1TB SSD',
      price: "US$1,918.95",
      brand: "Lenovo",
      rating: 4.5,
      reviews: 494,
      shipping: "免费送货",
      specs: ["硬盘容量: 1 TB", "Intel GPU", "USB-A, USB-C"],
    },
    {
      id: "5",
      image: "/placeholder.svg?height=200&width=200",
      label: "特价销售",
      name: 'Lenovo Legion 5i Gen 9 Intel - 16" - Intel Core i7',
      price: "US$1,299.99",
      originalPrice: "1,799",
      brand: "Lenovo",
      rating: 4.5,
      reviews: 619,
      shipping: "免费送货",
      specs: ["硬盘容量: 1 TB", "NVIDIA GPU", "USB-A"],
    },
    {
      id: "6",
      image: "/placeholder.svg?height=200&width=200",
      label: "特价销售",
      name: "Dell XPS 13 Laptop - w/ Windows 11 OS & Intel Core Ultra 7",
      price: "US$1,199.99",
      originalPrice: "1,400",
      brand: "Dell",
      rating: 4.5,
      reviews: 202,
      shipping: "免运费，4/15前送达",
      specs: ["硬盘容量: 16 GB", "Intel GPU", "1920x1200"],
    },
  ]

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium bg-gray-100 px-2 py-0.5 rounded">赞助商广告</span>
          <span className="text-muted-foreground text-sm">Sponsored</span>
        </div>
        <button className="text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] max-w-[220px] border rounded-lg overflow-hidden bg-white flex flex-col"
            >
              <div className="relative h-[180px] bg-white p-2">
                {product.label && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-0.5 rounded z-10">
                    {product.label}
                  </span>
                )}
                <Link href="#" className="block h-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </Link>
              </div>

              <div className="p-3 flex flex-col flex-grow">
                <Link href="#" className="text-blue-600 hover:underline text-sm line-clamp-2 h-10">
                  {product.name}
                </Link>

                <div className="mt-2">
                  <div className="font-medium text-base">{product.price}</div>
                  {product.originalPrice && (
                    <div className="text-muted-foreground text-sm line-through">{product.originalPrice}</div>
                  )}
                </div>

                <div className="mt-2">
                  <div className="text-sm">{product.brand}</div>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                  </div>
                </div>

                <div className="mt-2 text-xs text-muted-foreground">{product.shipping}</div>

                {product.specs.length > 0 && (
                  <div className="mt-2 text-xs text-muted-foreground">{product.specs.join(" · ")}</div>
                )}
              </div>
            </div>
          ))}

          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white rounded-full p-2 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

