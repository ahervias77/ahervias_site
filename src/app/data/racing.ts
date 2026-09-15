export type RaceEvent = {
  eventName: string
  date: string
  class: string
  car: string
  position: string
  videoUrl?: string
}

export type Season = {
  name: string
  events: RaceEvent[]
}

export const experience = [
  {
    name: 'Autocross',
    years: '2025 - Present',
    description:
      'Racing in regional and national autocross events with SCCA and PCA in a 2022 (ND2) Mazda MX-5 Miata.\n- 2025 HouSCCA Solo Rookie Driver of the Year\n- 2025 HouSCCA Autocross AST Champion\n- 2025 Lone Star Region PCA Autocross X4 Champion',
    image: '/images/autocross.jpg',
    imageAlt: '2026 SCCA Solo National Championships',
  },
  {
    name: 'Karting',
    years: '2013 - 2016',
    description:
      'Raced in club and regional level events in TaG Junior and TaG Senior classes.\n- 2016 OVRP Club Series TaG Senior Champion',
    image: '/images/karting.jpg',
    imageAlt: 'Gearup Challenge The F Series at PIRC',
  },
]

export const results: Season[] = [
  {
    name: 'Autocross - 2026',
    events: [
      {
        eventName: 'Spokes/SASCA Solo-Cross #2',
        date: '2/28/2026',
        class: 'X AST',
        car: '2022 Mazda MX-5 Miata',
        position: '9th',
        videoUrl: 'https://www.youtube.com/watch?v=DO_EQP-6YpI'
      },
      {
        eventName: 'SCCA Beeville ProSolo',
        date: '3/7/2026',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '4th',
        videoUrl: 'https://www.youtube.com/watch?v=X0m08VUapP4'
      },
      {
        eventName: 'Spokes/SASCA Autocross #3',
        date: '3/28/2026',
        class: 'X AST',
        car: '2022 Mazda MX-5 Miata',
        position: '6th',
        videoUrl: 'https://www.youtube.com/watch?v=PCmYoR_SuNE'
      },
      {
        eventName: 'Texas Region SCCA Autocross #2',
        date: '3/29/2026',
        class: 'X AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=lmsXby6yaAo'
      },
      {
        eventName: 'Texas Region SCCA Autocross #3',
        date: '4/19/2026',
        class: 'X SS',
        car: '2023 Porsche 718 Cayman GT4 RS',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=LNKK5PG1l_0'
      },
      {
        eventName: 'SCCA Beeville National Tour',
        date: '4/26/2026',
        class: 'AST',
        car: '2019 Mazda MX-5 Miata',
        position: '3rd',
        videoUrl: 'https://www.youtube.com/playlist?list=PLx_4D7Pd8XLVtVBzb4VzVeRgm2t8bK1PY'
      },
      {
        eventName: 'Spokes/SASCA Autocross #4',
        date: '5/9/2026',
        class: 'X AST',
        car: '2019 Mazda MX-5 Miata',
        position: '7th',
        videoUrl: 'https://www.youtube.com/watch?v=1VDeIuqh_kc'
      },
      {
        eventName: 'Texas Region SCCA Autocross #5',
        date: '6/6/2026',
        class: 'X AST',
        car: '2022 Mazda MX-5 Miata',
        position: '10th',
        videoUrl: 'https://www.youtube.com/watch?v=PD_Q3f7cwTM'
      },
      {
        eventName: 'Equipe Rapide Challenge Cup #4',
        date: '6/7/2026',
        class: 'X AST',
        car: '2022 Mazda MX-5 Miata',
        position: '16th',
        videoUrl: 'https://www.youtube.com/watch?v=uJy2uWNZBtQ'
      },
      {
        eventName: 'Texas Region SCCA Autocross #6',
        date: '7/12/2026',
        class: 'X AST',
        car: '2022 Mazda MX-5 Miata',
        position: '4th',
        videoUrl: 'https://www.youtube.com/watch?v=xnpzyIJq_PQ'
      },
      {
        eventName: 'Spokes Autocross #7',
        date: '8/1/2026',
        class: 'X AST',
        car: '2022 Mazda MX-5 Miata',
        position: '7th',
        videoUrl: 'https://www.youtube.com/watch?v=YMAUrsXroHE'
      },
      {
        eventName: 'Texas Region SCCA Autocross #7',
        date: '8/2/2026',
        class: 'X AST',
        car: '2022 Mazda MX-5 Miata',
        position: '2nd',
        videoUrl: 'https://www.youtube.com/watch?v=VNIt-FUBgpQ'
      },
      {
        eventName: 'SCCA Lincoln Air Park ProSolo',
        date: '8/9/2026',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '3rd',
        videoUrl: 'https://www.youtube.com/watch?v=4dTaFpt6Zxk'
      },
      {
        eventName: 'SCCA Solo National Championships',
        date: '9/11/2026',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '10th',
        videoUrl: 'https://www.youtube.com/playlist?list=PLPc2ZW198sgE'
      },
    ]
  },
  {
    name: 'Autocross - 2025',
    events: [
      {
        eventName: 'HouSCCA Autocross #2',
        date: '2/2/2025',
        class: 'Novice (AST)',
        car: '2022 Mazda MX-5 Miata',
        position: '3rd',
        videoUrl: 'https://www.youtube.com/watch?v=hry47WFV9AQ'
      },
      {
        eventName: 'HouSCCA Autocross #3',
        date: '3/2/2025',
        class: 'Novice (AST)',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=kxVOioCiLNE'
      },
      {
        eventName: 'Lone Star Region PCA Autocross #2',
        date: '3/22/2025',
        class: 'X4',
        car: '2022 Mazda MX-5 Miata',
        position: '2nd',
        videoUrl: 'https://www.youtube.com/watch?v=2Y-mf6yoAZY'
      },
      {
        eventName: 'Lone Star Region PCA Autocross #3',
        date: '3/23/2025',
        class: 'X4',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=waUcMD30224'
      },
      {
        eventName: 'HouSCCA Autocross #4',
        date: '4/6/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=R0wc0wEF9xQ'
      },
      {
        eventName: 'Lone Star Region PCA Autocross #4',
        date: '4/20/2025',
        class: 'X4',
        car: '2022 Mazda MX-5 Miata',
        position: '2nd',
        videoUrl: 'https://www.youtube.com/watch?v=6uG11P8Ih-A'
      },
      {
        eventName: 'HouSCCA Autocross #5',
        date: '5/4/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=6cryaQY6gWY'
      },
      {
        eventName: 'HouSCCA Autocross #6',
        date: '6/1/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=DyulJyr7ha8'
      },
      {
        eventName: 'HouSCCA Autocross #7',
        date: '7/6/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '2nd',
        videoUrl: 'https://www.youtube.com/watch?v=bQQ66NB6DCU'
      },
      {
        eventName: 'HouSCCA Autocross #8',
        date: '8/3/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=aZpN4QJosfk'
      },
      {
        eventName: 'HouSCCA Autocross #1 Makeup',
        date: '9/21/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=cL4_-b9IQK8'
      },
      {
        eventName: 'HouSCCA Autocross #9',
        date: '10/05/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=_PHuAeQ6AcI'
      },
      {
        eventName: 'Lone Star Region PCA Autocross #5',
        date: '10/19/2025',
        class: 'X4',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=YGZ4dJIRcnw'
      },
      {
        eventName: 'HouSCCA Autocross #10',
        date: '11/01/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=bR9joiUcp2Y'
      },
      {
        eventName: 'HouSCCA Autocross #11',
        date: '11/02/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=XFW8WcZ4y0Q'
      },
      {
        eventName: 'Lone Star Region PCA Autocross #6',
        date: '11/16/2025',
        class: 'X4',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=pNHZQ_xVSZA'
      },
      {
        eventName: 'HouSCCA Autocross #12',
        date: '12/07/2025',
        class: 'X AST',
        car: '2022 Mazda MX-5 Miata',
        position: '12th',
        videoUrl: 'https://www.youtube.com/watch?v=rwUIlcvHvOM'
      },
    ]
  },
]

// Newest events first, flattened across every season, so the home page picks up
// new results automatically as they are added above.
export function recentEvents(count: number): RaceEvent[] {
  return results
    .flatMap((season) => season.events)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}
