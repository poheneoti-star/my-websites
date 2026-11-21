'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

type IconName = 'search' | 'user' | 'heart' | 'bag' | 'menu' | 'close' | 'arrow' | 'chevron'

function Icon({
  name,
  size = 20,
  filled = false,
}: {
  name: IconName
  size?: number
  filled?: boolean
}) {
  const paths: Record<IconName, React.ReactNode> = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    bag: (
      <>
        <path d="M5 8h14l-1 13H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    menu: (
      <>
        <path d="M3 7h18M3 12h18M3 17h18" />
      </>
    ),
    close: <path d="m5 5 14 14M19 5 5 19" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    chevron: <path d="m8 10 4 4 4-4" />,
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const photos = {
  hero: 'https://images.unsplash.com/photo-1639969267653-d3793d62ed77?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800',
  newIn:
    'https://images.unsplash.com/photo-1742980511651-b845fa826f33?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900',
  denim:
    'https://images.unsplash.com/photo-1788200587577-953475819fa7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900',
  color:
    'https://images.unsplash.com/photo-1601661448492-a78b4237cec5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900',
  stripes:
    'https://images.unsplash.com/photo-1613329357776-979362d69807?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900',
}

const clothingAsset = (file: string) => `/assets/clothing/${file}.png`
const motAsset = (file: string) => `/assets/mot/${file}.png`

const products = [
  {
    id: 1,
    name: 'Asymmetric Wash Denim',
    category: 'Denim',
    price: 38,
    oldPrice: 52,
    image: clothingAsset('8cf45'),
    badge: 'Top trend',
    colors: ['#6e8292', '#202a32'],
  },
  {
    id: 2,
    name: 'Fitted Everyday Tee',
    category: 'Tops',
    price: 14,
    image: clothingAsset('c007e'),
    badge: 'Bestseller',
    colors: ['#171713', '#f1eee7', '#8f3434'],
  },
  {
    id: 3,
    name: 'Icon Wide-Leg Jean',
    category: 'Denim',
    price: 36,
    image: clothingAsset('3d5c8'),
    badge: 'Trending',
    colors: ['#7795ad', '#394f62'],
  },
  {
    id: 4,
    name: 'Contrast Knit Midi Dress',
    category: 'Dresses',
    price: 34,
    oldPrice: 46,
    image: clothingAsset('cd980'),
    colors: ['#171713', '#e8e4db'],
  },
  {
    id: 5,
    name: 'Beaded Heart Ringer Tee',
    category: 'Tops',
    price: 17,
    image: clothingAsset('532df'),
    badge: 'New',
    colors: ['#f3eee7', '#8f302d'],
  },
  {
    id: 6,
    name: 'Retro Collar Knit Top',
    category: 'Tops',
    price: 23,
    image: clothingAsset('ebe02'),
    colors: ['#6a493b', '#eee8dc'],
  },
  {
    id: 7,
    name: 'Relaxed Pocket Jean',
    category: 'Denim',
    price: 39,
    image: clothingAsset('ab2b0'),
    colors: ['#71889b', '#2e4151'],
  },
  {
    id: 8,
    name: 'Plaid Layered Long-Sleeve',
    category: 'Tops',
    price: 25,
    oldPrice: 31,
    image: clothingAsset('822cd'),
    badge: 'Low stock',
    colors: ['#171713', '#9a4c47'],
  },
  {
    id: 9,
    name: 'One-Shoulder Tie Mini Dress',
    category: 'Dresses',
    price: 32,
    image: clothingAsset('3f1cd'),
    badge: 'Party edit',
    colors: ['#171713', '#c0a48e'],
  },
  {
    id: 10,
    name: 'Soft Wide-Leg Lounge Pant',
    category: 'Pants',
    price: 27,
    image: clothingAsset('5343c'),
    colors: ['#aaa9a4', '#171713'],
  },
  {
    id: 11,
    name: 'Varsity V-Neck Tee',
    category: 'Tops',
    price: 16,
    image: clothingAsset('bc71c'),
    colors: ['#9d2928', '#f0ece4'],
  },
  {
    id: 12,
    name: 'Ultra-Baggy Pocket Jean',
    category: 'Denim',
    price: 42,
    oldPrice: 55,
    image: clothingAsset('0304e'),
    badge: 'Bestseller',
    colors: ['#607a90', '#a9b8c3'],
  },
  {
    id: 13,
    name: 'High-Rise Teacher Jean',
    category: 'Denim',
    price: 40,
    image: clothingAsset('e7390'),
    colors: ['#7e94a5', '#344b5e'],
  },
  {
    id: 14,
    name: 'Three-Piece Lounge Set',
    category: 'Loungewear',
    price: 29,
    image: clothingAsset('80c84'),
    badge: 'Set',
    colors: ['#171713', '#9d9c9a', '#d5a7aa'],
  },
  {
    id: 15,
    name: 'California Ruched Tee',
    category: 'Tops',
    price: 18,
    image: clothingAsset('2b829'),
    colors: ['#eeeae2', '#171713'],
  },
  {
    id: 16,
    name: 'Cherry Ombre Baby Tee',
    category: 'Tops',
    price: 19,
    oldPrice: 24,
    image: clothingAsset('02bdb'),
    badge: 'New',
    colors: ['#dca3ab', '#f1ece5'],
  },
  {
    id: 17,
    name: 'Cinched Stripe Polo',
    category: 'Tops',
    price: 22,
    image: clothingAsset('51f40'),
    colors: ['#baada0', '#6c5141'],
  },
  {
    id: 18,
    name: 'Asymmetric Ruched Crop Top',
    category: 'Tops',
    price: 17,
    image: clothingAsset('116dc'),
    colors: ['#eae7df', '#171713'],
  },
  {
    id: 19,
    name: 'Minimal Crew-Neck Tee',
    category: 'Tops',
    price: 13,
    image: clothingAsset('94084'),
    badge: 'Essential',
    colors: ['#a88158', '#171713', '#eee9df'],
  },
  {
    id: 20,
    name: 'Low-Rise Street Jean',
    category: 'Denim',
    price: 41,
    image: clothingAsset('bd6e7'),
    colors: ['#718ca2', '#d8dee1'],
  },
  {
    id: 21,
    name: 'Embroidered Stripe Long-Sleeve',
    category: 'Tops',
    price: 24,
    oldPrice: 30,
    image: clothingAsset('0da57'),
    colors: ['#5c382e', '#e7ddd1'],
  },
  {
    id: 22,
    name: 'Cherry Stripe Tee',
    category: 'Tops',
    price: 18,
    image: clothingAsset('4a443'),
    badge: 'Trending',
    colors: ['#9a3030', '#eee9df'],
  },
  {
    id: 23,
    name: 'Heritage Colour-Block Tee',
    category: 'Tops',
    price: 20,
    image: clothingAsset('38018'),
    colors: ['#172b48', '#eee6d8', '#8e292b'],
  },
  {
    id: 24,
    name: 'Somma Draped Pants',
    category: 'Pants',
    price: 78,
    image: motAsset('e9f16'),
    badge: 'M.O.T edit',
    colors: ['#a43c2d', '#4c295d'],
  },
  {
    id: 25,
    name: 'Jira Sculpted Top',
    category: 'Tops',
    price: 62,
    image: motAsset('35818'),
    colors: ['#d6a13a', '#526c3a'],
  },
  {
    id: 26,
    name: 'Dunsin Panelled Dress',
    category: 'Dresses',
    price: 118,
    oldPrice: 142,
    image: motAsset('5ef5f'),
    badge: 'Collection',
    colors: ['#d7a144', '#536f3c'],
  },
  {
    id: 27,
    name: 'Sumbo Wrap Top',
    category: 'Tops',
    price: 64,
    image: motAsset('de9e2'),
    colors: ['#536f3c', '#d7a144'],
  },
  {
    id: 28,
    name: 'Sumbo Full Skirt',
    category: 'Skirts',
    price: 82,
    image: motAsset('de9e2'),
    colors: ['#536f3c', '#d7a144'],
  },
  {
    id: 29,
    name: 'Sumbo Two-Piece Set',
    category: 'Sets',
    price: 138,
    image: motAsset('de9e2'),
    badge: 'Complete look',
    colors: ['#536f3c', '#d7a144'],
  },
  {
    id: 30,
    name: 'Jara Pleated Dress',
    category: 'Dresses',
    price: 112,
    image: motAsset('b8e69'),
    colors: ['#d2aa67', '#a3442d'],
  },
  {
    id: 31,
    name: 'Jodi Soft Volume Dress',
    category: 'Dresses',
    price: 108,
    image: motAsset('14dd7'),
    colors: ['#ddc7ba', '#b45851'],
  },
  {
    id: 32,
    name: 'Amaka Structured Skirt',
    category: 'Skirts',
    price: 74,
    image: motAsset('b1a11'),
    badge: 'New',
    colors: ['#c0a588', '#28231f'],
  },
  {
    id: 33,
    name: 'Bella Sun Dress',
    category: 'Dresses',
    price: 98,
    oldPrice: 120,
    image: motAsset('215df'),
    colors: ['#dfb416', '#dd5a35'],
  },
  {
    id: 34,
    name: 'Dimma Column Dress',
    category: 'Dresses',
    price: 104,
    image: motAsset('ede97'),
    colors: ['#e54e36', '#171713'],
  },
  {
    id: 35,
    name: 'Zina Contrast Dress',
    category: 'Dresses',
    price: 116,
    image: motAsset('36cac'),
    colors: ['#171713', '#bad4ba'],
  },
  {
    id: 36,
    name: 'DB Gathered Dress',
    category: 'Dresses',
    price: 96,
    image: motAsset('7a98b'),
    badge: 'M.O.T basic',
    colors: ['#e8753d', '#d5b28c'],
  },
  {
    id: 37,
    name: 'Amira Tiered Dress',
    category: 'Dresses',
    price: 110,
    image: motAsset('de9e1'),
    colors: ['#d7aa16', '#eeeae2'],
  },
  {
    id: 38,
    name: 'Kena Minimal Dress',
    category: 'Dresses',
    price: 102,
    image: motAsset('ed3d1'),
    colors: ['#eeeae2', '#171713'],
  },
  {
    id: 39,
    name: 'Fleur Wide-Leg Pants',
    category: 'Pants',
    price: 76,
    image: motAsset('9d0fd'),
    colors: ['#171713', '#eeeae2'],
  },
  {
    id: 40,
    name: 'Fleur Relaxed Set',
    category: 'Sets',
    price: 132,
    image: motAsset('80153'),
    badge: 'Set',
    colors: ['#171713', '#eeeae2'],
  },
  {
    id: 41,
    name: 'Tilla Pleated Pants',
    category: 'Pants',
    price: 84,
    image: motAsset('fbc52'),
    colors: ['#7c8b92', '#d9d4c8'],
  },
  {
    id: 42,
    name: 'Turai 2.0 Jumpsuit',
    category: 'Jumpsuits',
    price: 128,
    image: motAsset('741f3'),
    badge: 'Design edit',
    colors: ['#d5ba8f', '#171713'],
  },
  {
    id: 43,
    name: 'Binta 2.0 Top',
    category: 'Tops',
    price: 68,
    image: motAsset('8797e'),
    colors: ['#d6aa1b', '#e7e2d8'],
  },
  {
    id: 44,
    name: 'Nonye 2.0 Shorts',
    category: 'Shorts',
    price: 66,
    image: motAsset('ada83'),
    colors: ['#d6aa1b', '#171713'],
  },
  {
    id: 45,
    name: 'Rabi Denim Jumpsuit',
    category: 'Jumpsuits',
    price: 124,
    image: motAsset('9fcfa'),
    badge: 'Limited',
    colors: ['#76909f', '#273d4a'],
  },
  {
    id: 46,
    name: 'Binta 2.0 Set',
    category: 'Sets',
    price: 136,
    image: motAsset('8797e'),
    colors: ['#d6aa1b', '#e7e2d8'],
  },
  {
    id: 47,
    name: 'Dunsin 2.0 Dress',
    category: 'Dresses',
    price: 122,
    oldPrice: 148,
    image: motAsset('d480c'),
    badge: 'New season',
    colors: ['#d7a144', '#536f3c'],
  },
]

const categories = [
  { label: 'The Casual Edit', image: photos.newIn },
  { label: 'Denim Days', image: photos.denim },
  { label: 'Colour Story', image: photos.color },
  { label: 'New Stripes', image: photos.stripes },
]

const sizes = ['XS', 'S', 'M', 'L', 'XL']
const holidaySnowflakes = [
  ['3%', '-4.2s', '8.6s', '20px', '22px'],
  ['9%', '-1.1s', '11.4s', '13px', '-16px'],
  ['16%', '-7.8s', '13.2s', '27px', '31px'],
  ['23%', '-3.6s', '9.8s', '16px', '-24px'],
  ['31%', '-10.4s', '14.5s', '22px', '18px'],
  ['38%', '-5.5s', '10.7s', '12px', '-12px'],
  ['44%', '-2.3s', '12.8s', '25px', '28px'],
  ['52%', '-9.7s', '15.1s', '15px', '-30px'],
  ['59%', '-6.1s', '9.4s', '19px', '14px'],
  ['66%', '-12.6s', '16.3s', '28px', '-20px'],
  ['72%', '-3.9s', '11.8s', '14px', '26px'],
  ['78%', '-8.2s', '13.7s', '21px', '-15px'],
  ['84%', '-1.8s', '10.2s', '17px', '32px'],
  ['91%', '-11.3s', '14.9s', '24px', '-27px'],
  ['97%', '-5.9s', '12.1s', '13px', '16px'],
  ['27%', '-13.7s', '17.2s', '11px', '35px'],
  ['63%', '-7.1s', '12.5s', '10px', '-34px'],
  ['87%', '-4.8s', '15.7s', '18px', '20px'],
] as const

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [liked, setLiked] = useState<number[]>([])
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [wishlistReady, setWishlistReady] = useState(false)
  const [cart, setCart] = useState<{ id: number; size: string; color: string }[]>([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [optionProductId, setOptionProductId] = useState<number | null>(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [showSizeGuide, setShowSizeGuide] = useState(false)
  const [promoOpen, setPromoOpen] = useState(false)
  const [promoCopied, setPromoCopied] = useState('')

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = `${p.name} ${p.category}`.toLowerCase().includes(search.toLowerCase())
      return matchesSearch && (activeCategory === 'All' || p.category === activeCategory)
    })
  }, [search, activeCategory])

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem('modea-wishlist') ?? '[]')
      if (Array.isArray(saved)) {
        const validIds = saved.filter(
          (id): id is number =>
            typeof id === 'number' && products.some((product) => product.id === id),
        )
        setLiked([...new Set(validIds)])
      }
    } catch {
      window.localStorage.removeItem('modea-wishlist')
    } finally {
      setWishlistReady(true)
    }
  }, [])

  useEffect(() => {
    if (!wishlistReady) return
    window.localStorage.setItem('modea-wishlist', JSON.stringify(liked))
  }, [liked, wishlistReady])

  useEffect(() => {
    let dismissed = false
    try {
      dismissed = window.sessionStorage.getItem('modea-holiday-promo-dismissed') === 'true'
    } catch {
      dismissed = false
    }

    if (dismissed) return
    const timer = window.setTimeout(() => setPromoOpen(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setActiveCategory('All')
    setSearchOpen(false)
    requestAnimationFrame(() => {
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const chooseSearchResult = (name: string) => {
    setSearch(name)
    setActiveCategory('All')
    setSearchOpen(false)
    requestAnimationFrame(() => {
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const openProductOptions = (id: number, color = '') => {
    setOptionProductId(id)
    setSelectedSize('')
    setSelectedColor(color)
    setShowSizeGuide(false)
  }

  const closePromo = () => {
    setPromoOpen(false)
    try {
      window.sessionStorage.setItem('modea-holiday-promo-dismissed', 'true')
    } catch {
      // The offer can still be reopened if session storage is unavailable.
    }
  }

  const copyPromo = async (code: string) => {
    try {
      await window.navigator.clipboard.writeText(code)
    } catch {
      // Keep the code visible for manual copying when clipboard access is unavailable.
    }
    setPromoCopied(code)
    window.setTimeout(() => setPromoCopied(''), 1800)
  }

  const shopPromo = () => {
    closePromo()
    requestAnimationFrame(() => {
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const addToCart = () => {
    if (optionProductId === null || !selectedSize || !selectedColor) return
    setCart((items) => [
      ...items,
      { id: optionProductId, size: selectedSize, color: selectedColor },
    ])
    setOptionProductId(null)
    setCartOpen(true)
  }

  const optionProduct = products.find((product) => product.id === optionProductId)
  const likedProducts = liked
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is (typeof products)[number] => Boolean(product))
  const cartProducts = cart.map((item) => ({
    ...products.find((product) => product.id === item.id)!,
    ...item,
  }))
  const cartTotal = cartProducts.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="storefront-shell min-h-screen bg-[#f7f6f2] text-[#171713]">
      <div className="announcement-shine bg-[#171713] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white sm:text-xs">
        Holiday preview: 25% off with MERRY25 <span className="mx-2 text-white/40">|</span> Free
        express shipping over $100
      </div>

      <header className="modern-header sticky top-0 z-40 border-b border-black/10 bg-[#f7f6f2]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-5 lg:px-10">
          <button
            className="icon-button lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Icon name="menu" />
          </button>
          <a
            href="#"
            className="brand-mark font-display text-[26px] font-semibold tracking-[-0.04em] sm:text-[30px]"
          >
            MODÉA
          </a>
          <nav className="hidden items-center gap-8 text-[12px] font-semibold uppercase tracking-[0.12em] lg:flex">
            {['New In', 'Women', 'Dresses', 'Clothing', 'Accessories'].map((item) => (
              <a className="nav-link" href="#shop" key={item}>
                {item}
              </a>
            ))}
            <a href="#shop" className="text-[#c4402f]">
              Sale
            </a>
          </nav>
          <div className="flex items-center gap-4 sm:gap-5">
            <button
              className="icon-button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
            >
              <Icon name="search" />
            </button>
            <Link
              href="/signin"
              className="icon-button hidden sm:grid"
              aria-label="Sign in to your account"
            >
              <Icon name="user" />
            </Link>
            <button
              className="icon-button relative"
              onClick={() => setWishlistOpen(true)}
              aria-label={`Open wishlist with ${liked.length} saved items`}
            >
              <Icon name="heart" />
              {liked.length > 0 && <span className="counter">{liked.length}</span>}
            </button>
            <button
              className="icon-button relative"
              onClick={() => setCartOpen(true)}
              aria-label="Shopping bag"
            >
              <Icon name="bag" />
              {cart.length > 0 && <span className="counter">{cart.length}</span>}
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="absolute inset-x-0 top-full border-t border-black/10 bg-white px-5 py-4 shadow-xl">
            <div className="mx-auto max-w-2xl">
              <form
                onSubmit={submitSearch}
                className="flex items-center gap-3 border-b border-black pb-2"
              >
                <Icon name="search" />
                <input
                  autoFocus
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    setActiveCategory('All')
                  }}
                  className="w-full bg-transparent text-sm outline-none"
                  placeholder="Search tops, denim, dresses, sets..."
                  aria-label="Search products"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="text-[10px] font-bold uppercase tracking-wider text-black/50"
                  >
                    Clear
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                >
                  <Icon name="close" size={18} />
                </button>
              </form>
              {search.trim() && (
                <div className="pt-3">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-black/40">
                    {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
                  </p>
                  {filtered.length > 0 ? (
                    <div className="grid max-h-48 gap-1 overflow-y-auto sm:grid-cols-2">
                      {filtered.map((product) => (
                        <button
                          type="button"
                          key={product.id}
                          onClick={() => chooseSearchResult(product.name)}
                          className="search-result flex items-center gap-3 p-2 text-left"
                        >
                          <Image
                            src={product.image}
                            alt=""
                            width={40}
                            height={48}
                            className="h-12 w-10 shrink-0 object-cover"
                          />
                          <span className="min-w-0">
                            <span className="block truncate text-xs">{product.name}</span>
                            <span className="mt-1 block text-[10px] text-black/45">
                              ${product.price.toFixed(2)}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="py-3 text-xs text-black/50">
                      No matches found. Try “dress”, “set”, “denim”, or “jumpsuit”.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="hero-stage group relative min-h-[620px] overflow-hidden lg:min-h-[760px]">
          <Image
            src={photos.hero}
            alt="Woman walking through the city in a relaxed everyday outfit"
            fill
            priority
            sizes="100vw"
            className="hero-image object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-black/5" />
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="relative mx-auto flex min-h-[620px] max-w-[1500px] items-end px-5 pb-14 lg:min-h-[760px] lg:items-center lg:px-10 lg:pb-0">
            <div className="hero-copy max-w-xl text-white">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em]">
                The everyday collection
              </p>
              <h1 className="font-display text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[104px]">
                Wear it
                <br />
                <span className="italic text-[#dbe367]">your way</span>
              </h1>
              <p className="mt-6 max-w-sm text-sm leading-6 text-white/85 sm:text-base">
                Easy layers, great denim, and a little colour. New pieces made for plans that change
                as fast as you do.
              </p>
              <a
                href="#shop"
                className="cta-button mt-8 inline-flex items-center gap-3 bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-black"
              >
                Shop the collection <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>
          <div className="absolute bottom-7 right-8 hidden text-right text-[10px] uppercase tracking-[0.18em] text-white/80 md:block">
            The new editorial
            <br />
            Volume 01
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="eyebrow">Explore the edit</p>
              <h2 className="section-title">Shop by mood</h2>
            </div>
            <a
              href="#shop"
              className="hidden items-center gap-2 border-b border-black pb-1 text-xs font-bold uppercase tracking-[0.12em] sm:flex"
            >
              View all <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {categories.map((category, i) => (
              <a
                href="#shop"
                key={category.label}
                className={`category-card group relative overflow-hidden ${i % 2 ? 'mt-8 lg:mt-12' : ''}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#dedbd3]">
                  <Image
                    src={category.image}
                    alt={category.label}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="category-image object-cover"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-16 text-white sm:px-6 sm:pb-6">
                  <h3 className="font-display text-xl tracking-[-0.02em] sm:text-2xl">
                    {category.label}
                  </h3>
                  <span className="motion-arrow mt-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em]">
                    Shop now <Icon name="arrow" size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="shop" className="bg-white px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="text-center">
              <p className="eyebrow">Curated for you</p>
              <h2 className="section-title">The complete edit</h2>
            </div>
            <div className="scrollbar-hide mt-8 flex justify-start gap-2 overflow-x-auto pb-3 sm:justify-center">
              {[
                'All',
                'Tops',
                'Denim',
                'Dresses',
                'Pants',
                'Sets',
                'Skirts',
                'Jumpsuits',
                'Shorts',
                'Loungewear',
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition ${activeCategory === category ? 'bg-black text-white' : 'border border-black/15 hover:border-black'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4 lg:gap-x-5">
              {filtered.map((product) => {
                const isLiked = liked.includes(product.id)
                return (
                  <article key={product.id} className="product-card group">
                    <div className="product-media relative aspect-[3/4] overflow-hidden bg-[#eeece7]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="product-image object-cover"
                      />
                      {product.badge && (
                        <span className="absolute left-3 top-3 bg-white px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em]">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={() =>
                          setLiked((items) =>
                            isLiked
                              ? items.filter((id) => id !== product.id)
                              : [...items, product.id],
                          )
                        }
                        className={`floating-action absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white ${isLiked ? 'text-[#c4402f]' : ''}`}
                        aria-label={`${isLiked ? 'Remove' : 'Add'} ${product.name} ${
                          isLiked ? 'from' : 'to'
                        } wishlist`}
                        aria-pressed={isLiked}
                      >
                        <Icon name="heart" size={17} filled={isLiked} />
                      </button>
                      <button
                        onClick={() => openProductOptions(product.id)}
                        className="quick-add absolute inset-x-3 bottom-3 bg-black py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
                      >
                        Choose options
                      </button>
                    </div>
                    <div className="pt-4">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-black/45">
                        {product.category}
                      </p>
                      <h3 className="product-name mt-1 text-sm leading-5">{product.name}</h3>
                      <p className="mt-2 text-sm font-semibold">
                        ${product.price.toFixed(2)}{' '}
                        {product.oldPrice && (
                          <span className="ml-2 font-normal text-black/40 line-through">
                            ${product.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </p>
                      <div
                        className="mt-3 flex items-center gap-1.5"
                        aria-label="Available colours"
                      >
                        {product.colors.map((color, colorIndex) => (
                          <button
                            key={color}
                            onClick={() => openProductOptions(product.id, color)}
                            className="h-4 w-4 rounded-full border border-black/15 ring-offset-2 transition hover:scale-110 focus:ring-2 focus:ring-black/60"
                            style={{ backgroundColor: color }}
                            aria-label={`Choose colour ${colorIndex + 1} for ${product.name}`}
                          />
                        ))}
                        <span className="ml-1 text-[9px] text-black/40">
                          +{product.colors.length}
                        </span>
                      </div>
                      <button
                        onClick={() => openProductOptions(product.id)}
                        className="mt-3 w-full border border-black py-2.5 text-[10px] font-bold uppercase tracking-[0.13em] transition hover:bg-black hover:text-white lg:hidden"
                      >
                        Choose options
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
            {filtered.length === 0 && (
              <div className="py-20 text-center text-sm text-black/50">
                No pieces match your search.
              </div>
            )}
          </div>
        </section>

        <section className="newsletter-panel bg-[#dbe367] px-5 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="eyebrow">15% off your first order</p>
              <h2 className="font-display max-w-3xl text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">
                Good style should find you.
              </h2>
            </div>
            <div>
              <p className="mb-5 max-w-md text-sm leading-6">
                Join our list for early access to new drops, private sales, and edits worth knowing
                about.
              </p>
              <form className="flex border-b border-black" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="min-w-0 flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-black/50"
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                />
                <button className="px-2 text-xs font-bold uppercase tracking-[0.14em]">
                  Join now
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#171713] px-5 py-14 text-white lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 border-b border-white/15 pb-14 md:grid-cols-4">
          <div>
            <div className="font-display text-3xl font-semibold">MODÉA</div>
            <p className="mt-4 max-w-xs text-xs leading-5 text-white/55">
              Considered fashion for everyday expression. Designed for now, made to be worn often.
            </p>
          </div>
          {[
            ['Shop', 'New In', 'Clothing', 'Accessories', 'Sale'],
            ['Help', 'Contact Us', 'Shipping & Returns', 'Size Guide', 'Track Order'],
            ['Follow', 'Instagram', 'Pinterest', 'TikTok', 'Facebook'],
          ].map(([title, ...links]) => (
            <div key={title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em]">{title}</h3>
              <ul className="mt-5 space-y-3 text-xs text-white/60">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto flex max-w-[1500px] flex-col gap-3 pt-6 text-[10px] uppercase tracking-[0.12em] text-white/40 sm:flex-row sm:justify-between">
          <p>© 2026 Modéa Studio. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>

      {!promoOpen && (
        <button
          className="holiday-trigger fixed bottom-5 left-5 z-30 overflow-hidden rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-xl sm:bottom-7 sm:left-7"
          onClick={() => setPromoOpen(true)}
          aria-label="Open holiday offers"
        >
          <span className="relative z-10">Holiday offers</span>
        </button>
      )}

      {promoOpen && (
        <div className="fixed inset-0 z-[60] grid place-items-center px-4 py-8">
          <button
            className="absolute inset-0 bg-[#07140f]/70 backdrop-blur-sm"
            onClick={closePromo}
            aria-label="Close holiday offers"
          />
          <section
            className="holiday-popup relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] bg-[#f8f4e9] shadow-[0_35px_100px_rgba(0,0,0,0.38)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="holiday-offers-title"
          >
            <div className="relative overflow-hidden bg-[#174b36] px-6 py-5 text-white sm:px-9">
              <div className="holiday-snow" aria-hidden="true">
                {holidaySnowflakes.map(([left, delay, duration, size, drift]) => (
                  <span
                    key={`${left}-${delay}`}
                    style={
                      {
                        '--flake-drift': drift,
                        animationDelay: delay,
                        animationDuration: duration,
                        fontSize: size,
                        left,
                      } as React.CSSProperties
                    }
                  >
                    ❄
                  </span>
                ))}
              </div>
              <div className="relative flex items-center justify-between">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/65">
                  MODÉA holiday preview
                </p>
                <button
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition hover:rotate-90 hover:bg-white hover:text-[#174b36]"
                  onClick={closePromo}
                  aria-label="Close holiday offers"
                >
                  <Icon name="close" size={17} />
                </button>
              </div>
              <div className="relative mt-8 max-w-lg pb-3">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dbe367]">
                  A little something for your list
                </p>
                <h2
                  id="holiday-offers-title"
                  className="font-display text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl"
                >
                  The season to
                  <br />
                  dress brilliantly.
                </h2>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                <article className="holiday-offer-card bg-[#b9262e] p-5 text-white">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/65">
                    Holiday edit
                  </p>
                  <p className="font-display mt-5 text-4xl leading-none">25% off</p>
                  <p className="mt-2 text-xs leading-5 text-white/70">
                    Save on party pieces, dresses, sets, and gifting favourites.
                  </p>
                  <button
                    onClick={() => copyPromo('MERRY25')}
                    className="mt-6 flex w-full items-center justify-between border border-white/30 bg-white/10 px-4 py-3 text-left transition hover:bg-white hover:text-[#b9262e]"
                  >
                    <span className="font-mono text-xs font-bold tracking-[0.18em]">MERRY25</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em]">
                      {promoCopied === 'MERRY25' ? 'Copied' : 'Copy'}
                    </span>
                  </button>
                </article>

                <article className="holiday-offer-card bg-[#174b36] p-5 text-white">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/65">
                    Delivery upgrade
                  </p>
                  <p className="font-display mt-5 text-4xl leading-none">Express, on us</p>
                  <p className="mt-2 text-xs leading-5 text-white/70">
                    Complimentary express shipping when your order reaches $100.
                  </p>
                  <button
                    onClick={() => copyPromo('SLEIGHRIDE')}
                    className="mt-6 flex w-full items-center justify-between border border-white/30 bg-white/10 px-4 py-3 text-left transition hover:bg-white hover:text-[#174b36]"
                  >
                    <span className="font-mono text-xs font-bold tracking-[0.15em]">
                      SLEIGHRIDE
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em]">
                      {promoCopied === 'SLEIGHRIDE' ? 'Copied' : 'Copy'}
                    </span>
                  </button>
                </article>
              </div>

              <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-center text-[10px] leading-5 text-black/45 sm:text-left">
                  Limited seasonal offers. One promo code per order.
                </p>
                <button
                  onClick={shopPromo}
                  className="cta-button w-full justify-center bg-black px-7 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:w-auto"
                >
                  Shop holiday looks
                </button>
              </div>
              <p className="sr-only" aria-live="polite">
                {promoCopied ? `${promoCopied} copied to clipboard` : ''}
              </p>
            </div>
          </section>
        </div>
      )}

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#f7f6f2] p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-semibold">MODÉA</span>
            <button onClick={() => setMenuOpen(false)}>
              <Icon name="close" />
            </button>
          </div>
          <nav className="mt-16 flex flex-col">
            {['New In', 'Women', 'Dresses', 'Clothing', 'Accessories', 'Sale'].map((item) => (
              <a
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-4 font-display text-3xl"
                href="#shop"
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
          <p className="absolute bottom-8 text-[10px] uppercase tracking-[0.18em] text-black/40">
            New season. New perspective.
          </p>
        </div>
      )}

      {wishlistOpen && (
        <>
          <button
            className="fixed inset-0 z-50 bg-black/45"
            onClick={() => setWishlistOpen(false)}
            aria-label="Close wishlist"
          />
          <aside
            className="drawer-panel fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white p-6 shadow-2xl"
            aria-label="Your wishlist"
          >
            <div className="flex items-center justify-between border-b border-black/10 pb-5">
              <h2 className="font-display text-2xl">
                Your wishlist <span className="text-base text-black/40">({liked.length})</span>
              </h2>
              <button
                className="icon-button"
                onClick={() => setWishlistOpen(false)}
                aria-label="Close wishlist"
              >
                <Icon name="close" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-5">
              {likedProducts.length === 0 ? (
                <div className="grid h-full place-content-center px-8 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#f3f2ed]">
                    <Icon name="heart" size={25} />
                  </span>
                  <p className="font-display mt-5 text-3xl">Save what you love.</p>
                  <p className="mt-3 text-xs leading-5 text-black/45">
                    Tap the heart on any piece and it will appear here.
                  </p>
                  <button
                    onClick={() => setWishlistOpen(false)}
                    className="mt-6 border-b border-black pb-1 text-[10px] font-bold uppercase tracking-[0.14em]"
                  >
                    Explore the collection
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {likedProducts.map((product) => (
                    <article className="group flex gap-4" key={product.id}>
                      <div className="relative h-36 w-28 shrink-0 overflow-hidden bg-[#eeece7]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="112px"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="text-[9px] uppercase tracking-[0.14em] text-black/40">
                          {product.category}
                        </p>
                        <h3 className="mt-1 text-sm leading-5">{product.name}</h3>
                        <p className="mt-2 text-sm font-semibold">${product.price.toFixed(2)}</p>
                        <div className="mt-auto flex items-end justify-between gap-3">
                          <button
                            onClick={() => {
                              setWishlistOpen(false)
                              openProductOptions(product.id)
                            }}
                            className="bg-black px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.13em] text-white transition hover:bg-[#333]"
                          >
                            Choose options
                          </button>
                          <button
                            onClick={() =>
                              setLiked((items) => items.filter((id) => id !== product.id))
                            }
                            className="text-[9px] uppercase tracking-wider text-black/45 underline transition hover:text-black"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {likedProducts.length > 0 && (
              <div className="border-t border-black/10 pt-5">
                <p className="text-center text-[10px] uppercase tracking-[0.12em] text-black/40">
                  Saved locally on this device
                </p>
              </div>
            )}
          </aside>
        </>
      )}

      {optionProduct && (
        <>
          <button
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setOptionProductId(null)}
            aria-label="Close product options"
          />
          <section
            className="option-panel fixed inset-x-0 bottom-0 z-50 max-h-[92dvh] overflow-y-auto bg-white shadow-2xl sm:inset-auto sm:left-1/2 sm:top-1/2 sm:w-[760px] sm:max-w-[calc(100vw-2rem)] sm:-translate-x-1/2 sm:-translate-y-1/2"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-options-title"
          >
            <button
              onClick={() => setOptionProductId(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white shadow-md"
              aria-label="Close product options"
            >
              <Icon name="close" />
            </button>
            <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative aspect-[4/3] bg-[#eeece7] sm:aspect-[3/4]">
                <Image
                  src={optionProduct.image}
                  alt={optionProduct.name}
                  fill
                  sizes="(min-width: 640px) 340px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">
                  {optionProduct.category}
                </p>
                <h2 id="product-options-title" className="font-display mt-2 text-3xl leading-none">
                  {optionProduct.name}
                </h2>
                <p className="mt-4 text-base font-semibold">${optionProduct.price.toFixed(2)}</p>

                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em]">
                      Select colour
                    </p>
                    {selectedColor && (
                      <span className="text-[11px] text-black/45">
                        Colour {optionProduct.colors.indexOf(selectedColor) + 1}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {optionProduct.colors.map((color, colorIndex) => (
                      <button
                        type="button"
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`grid h-10 w-10 place-items-center rounded-full border transition ${
                          selectedColor === color
                            ? 'border-black ring-2 ring-black ring-offset-2'
                            : 'border-black/15 hover:scale-105'
                        }`}
                        aria-label={`Colour ${colorIndex + 1}`}
                        aria-pressed={selectedColor === color}
                      >
                        <span
                          className="h-full w-full rounded-full border-[5px] border-white"
                          style={{ backgroundColor: color }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em]">Select size</p>
                    <button
                      type="button"
                      onClick={() => setShowSizeGuide((visible) => !visible)}
                      className="border-b border-black/40 text-[10px] uppercase tracking-wider text-black/55"
                    >
                      {showSizeGuide ? 'Hide guide' : 'Size guide'}
                    </button>
                  </div>
                  {showSizeGuide && (
                    <div className="mt-3 grid grid-cols-5 bg-[#f7f6f2] p-3 text-center text-[10px] text-black/60">
                      {['XS · 0–2', 'S · 4–6', 'M · 8–10', 'L · 12–14', 'XL · 16–18'].map(
                        (measurement) => (
                          <span key={measurement}>{measurement}</span>
                        ),
                      )}
                    </div>
                  )}
                  <div className="mt-3 grid grid-cols-5 gap-2">
                    {sizes.map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`border py-3 text-xs font-semibold transition ${
                          selectedSize === size
                            ? 'border-black bg-black text-white'
                            : 'border-black/20 hover:border-black'
                        }`}
                        aria-pressed={selectedSize === size}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={addToCart}
                  disabled={!selectedColor || !selectedSize}
                  className="mt-8 w-full bg-black py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#333] disabled:cursor-not-allowed disabled:bg-black/20"
                >
                  {!selectedColor || !selectedSize ? 'Select colour and size' : 'Add to bag'}
                </button>
                <p className="mt-3 text-center text-[10px] text-black/45">
                  Free returns within 30 days
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {cartOpen && (
        <>
          <button
            className="fixed inset-0 z-50 bg-black/45"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          />
          <aside className="drawer-panel fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 pb-5">
              <h2 className="font-display text-2xl">
                Your bag <span className="text-base text-black/40">({cart.length})</span>
              </h2>
              <button onClick={() => setCartOpen(false)}>
                <Icon name="close" />
              </button>
            </div>
            <div className="flex-1 overflow-auto py-5">
              {cartProducts.length === 0 ? (
                <div className="grid h-full place-content-center text-center">
                  <Icon name="bag" size={36} />
                  <p className="mt-4 text-sm">Your bag is currently empty.</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-5 border-b border-black pb-1 text-xs font-bold uppercase tracking-wider"
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {cartProducts.map((product, index) => (
                    <div
                      className="flex gap-4"
                      key={`${product.id}-${product.size}-${product.color}-${index}`}
                    >
                      <Image
                        className="h-28 w-24 object-cover"
                        src={product.image}
                        alt=""
                        width={96}
                        height={112}
                      />
                      <div className="flex flex-1 flex-col">
                        <p className="text-sm">{product.name}</p>
                        <div className="mt-2 flex items-center gap-3 text-xs text-black/50">
                          <span>Size {product.size}</span>
                          <span className="h-3 w-px bg-black/15" />
                          <span className="flex items-center gap-1.5">
                            <span
                              className="h-3.5 w-3.5 rounded-full border border-black/15"
                              style={{ backgroundColor: product.color }}
                            />
                            Colour {product.colors.indexOf(product.color) + 1}
                          </span>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>
                          <button
                            onClick={() => setCart((items) => items.filter((_, i) => i !== index))}
                            className="text-[10px] uppercase tracking-wider underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="border-t border-black/10 pt-5">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <p className="mt-2 text-[11px] text-black/45">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="mt-5 w-full bg-black py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#333]">
                  Checkout
                </button>
              </div>
            )}
          </aside>
        </>
      )}
    </div>
  )
}
