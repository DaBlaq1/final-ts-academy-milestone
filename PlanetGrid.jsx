import { useState, useEffect } from 'react'
import planetImg from '../images/image 21.png'

const FALLBACK = [
  { englishName: 'Mercury', semimajorAxis: 57909050 },
  { englishName: 'Venus',   semimajorAxis: 108208000 },
  { englishName: 'Earth',   semimajorAxis: 149598023 },
  { englishName: 'Mars',    semimajorAxis: 227936640 },
  { englishName: 'Jupiter', semimajorAxis: 778412010 },
  { englishName: 'Saturn',  semimajorAxis: 1426725400 },
  { englishName: 'Uranus',  semimajorAxis: 2870972200 },
  { englishName: 'Neptune', semimajorAxis: 4498252900 },
  { englishName: 'Pluto',   semimajorAxis: 5906380000 },
]

const TARGETS = new Set(FALLBACK.map((p) => p.englishName))

function PlanetCard({ name, distance }) {
  return (
    <figure>
      <img src={planetImg} alt={`${name} as seen from space`} />
      <figcaption>
        <strong>{name}</strong>
        <span>{Number(distance).toLocaleString()} km from Sun</span>
      </figcaption>
    </figure>
  )
}

function PlanetGrid() {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,true')
      .then((res) => {
        if (!res.ok) throw new Error('non-200')
        return res.json()
      })
      .then((data) => {
        const apiPlanets = (data.bodies || [])
          .filter((b) => TARGETS.has(b.englishName))
          .sort((a, b) => a.semimajorAxis - b.semimajorAxis)

        // Merge API results with fallback (keeps Pluto which isn't isPlanet)
        const names = new Set(apiPlanets.map((p) => p.englishName))
        const merged = [
          ...apiPlanets,
          ...FALLBACK.filter((p) => !names.has(p.englishName)),
        ].sort((a, b) => a.semimajorAxis - b.semimajorAxis)

        setPlanets(merged)
        setLoading(false)
      })
      .catch(() => {
        setPlanets(FALLBACK)
        setLoading(false)
      })
  }, [])

  return (
    <section className="planets-section" id="planets" aria-labelledby="planets-title">
      <div className="section-header">
        <h2 id="planets-title">Visualizing the Differences Between Planets</h2>
        <p>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
      </div>

      {loading && <p className="status-msg">Loading planets…</p>}

      <div className="grid">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.englishName}
            name={planet.englishName}
            distance={planet.semimajorAxis}
          />
        ))}
      </div>
    </section>
  )
}

export default PlanetGrid
