import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { ThreePillars } from '@/components/three-pillars'
import { Practice } from '@/components/practice'
import { Lineage } from '@/components/lineage'

import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ThreePillars />
      <Practice />
      <Lineage />
      <Contact />
      <Footer />
    </main>
  )
}
