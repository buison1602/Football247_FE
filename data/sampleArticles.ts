// import { Article } from '../components/ArticleGrid';
 import { Article } from '../src/components/ArticleGrid'
import { HorizontalArticle } from '../src/components/HorizontalArticleCard';

export const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'Liverpool in "do or die season" with "unproven" duo as "it\'s curtains" for Arsenal if there\'s another "failure"',
    description: 'Liverpool face a crucial season with new signings while Arsenal must deliver after recent disappointments. The pressure is mounting on both clubs to perform.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Premier League', 'Liverpool', 'Arsenal'],
    publishedAt: '23 hours ago',
    author: 'Will Ford',
    commentCount: 37,
    priority: 1 // Featured article
  },
  {
    id: '2',
    title: 'Arsenal lead five biggest Premier League overpays in the summer 2025 transfer window',
    description: 'This summer has confirmed the existence of the Premier League tax beyond all doubt, with one Arsenal transfer unsurprisingly taking the lead.',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['F365 Features', 'Matheus Cunha'],
    publishedAt: '19 hours ago',
    author: 'Matt Stead',
    commentCount: 71,
  },
  {
    id: '3',
    title: 'Rashford takes incredible "salary cut" as Amorim says £62.6m "showed what we need"',
    description: 'Marcus Rashford has reportedly sanctioned a gargantuan pay cut to facilitate his loan to Barcelona, who have a "verbal agreement".',
    imageUrl: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Manchester United', 'Marcus Rashford'],
    publishedAt: '12 hours ago',
    author: 'Matt Stead',
    commentCount: 8,
  },
  {
    id: '4',
    title: 'Liverpool "must replace" the "new Van Dijk" instead of repeating "huge mistake" Klopp made',
    description: 'Liverpool defence is "actually worrying" amid £150m leak chase and "must replace" the "new Van Dijk" instead of repeating "huge mistake" Klopp made.',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Liverpool', 'Van Dijk'],
    publishedAt: '17 Jul 2025',
    author: 'F-Bot F365',
    commentCount: 65,
  },
  {
    id: '5',
    title: 'Is Man Utd in the Big Six a "three-card trick" or a Harlem Globetrotters circus?',
    description: 'Manchester United\'s position in the traditional Big Six is being questioned as their performances continue to disappoint.',
    imageUrl: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Manchester United', 'Big Six'],
    publishedAt: '16 Jul 2025',
    author: 'Ian Watson',
    commentCount: 36,
  },
  {
    id: '6',
    title: 'Marcus Rashford only second to Mbappe in incredible "salary cut" as Barcelona move edges closer',
    description: 'Marcus Rashford has reportedly agreed to a significant salary reduction to facilitate his move to Barcelona in the January transfer window.',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Barcelona', 'Transfer News'],
    publishedAt: '15 Jul 2025',
    author: 'Transfer Insider',
    commentCount: 42,
  },
  {
    id: '7',
    title: 'Chelsea target £80m striker as Enzo Maresca plans major summer overhaul',
    description: 'Chelsea are reportedly targeting a high-profile striker signing as part of Enzo Maresca\'s plans to reshape the squad for next season.',
    imageUrl: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Chelsea', 'Transfer News', 'Enzo Maresca'],
    publishedAt: '14 Jul 2025',
    author: 'Chelsea Reporter',
    commentCount: 28,
  },
  {
    id: '8',
    title: 'Tottenham eye surprise move for Serie A star as Postecoglou seeks creativity',
    description: 'Tottenham Hotspur are reportedly interested in signing a creative midfielder from Serie A to bolster their attacking options.',
    imageUrl: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Tottenham', 'Serie A', 'Postecoglou'],
    publishedAt: '13 Jul 2025',
    author: 'Spurs Insider',
    commentCount: 19,
  }
];

export const horizontalArticles: HorizontalArticle[] = [
  {
    id: 'h1',
    title: 'Man Utd slash Rashford buy option to force through Barcelona transfer as wage details revealed',
    description: 'Man Utd have slashed the permanent transfer option fee for Marcus Rashford to force through his transfer to Barcelona this January, with wage details now revealed.',
    imageUrl: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Manchester United', 'Marcus Rashford'],
    publishedAt: '1 hour ago',
    author: 'Will Ford',
    commentCount: 142
  },
  {
    id: 'h2',
    title: 'Liverpool "favourites" to land £100m Crystal Palace star who\'s "ready to wait" for Reds over Tottenham',
    description: 'Liverpool are reportedly the "favourites" to land the Crystal Palace star, who\'s "ready to wait" for a Reds bid rather than moving to Tottenham this month.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Liverpool', 'Adam Wharton'],
    publishedAt: '1 hour ago',
    author: 'Will Ford',
    commentCount: 89
  },
  {
    id: 'h3',
    title: 'Arsenal target £85m striker as Arteta eyes "perfect" Havertz partner for title push',
    description: 'Arsenal are reportedly targeting an £85m striker signing as Mikel Arteta looks for the "perfect" partner for Kai Havertz in their Premier League title push.',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Arsenal', 'Transfer News'],
    publishedAt: '2 hours ago',
    author: 'Matt Stead',
    commentCount: 156
  },
  {
    id: 'h4',
    title: 'Chelsea make £60m bid for Brighton star as Maresca targets defensive reinforcement',
    description: 'Chelsea have reportedly submitted a £60m bid for the Brighton defender as Enzo Maresca looks to strengthen his defensive options before the transfer deadline.',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Chelsea', 'Brighton'],
    publishedAt: '3 hours ago',
    author: 'James Pearce',
    commentCount: 73
  },
  {
    id: 'h5',
    title: 'Manchester City prepare £120m double swoop as Guardiola eyes midfield overhaul',
    description: 'Manchester City are preparing a £120m double transfer swoop as Pep Guardiola plans a significant midfield overhaul for the remainder of the season.',
    imageUrl: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Manchester City', 'Pep Guardiola'],
    publishedAt: '4 hours ago',
    author: 'Sam Lee',
    commentCount: 201
  },
  {
    id: 'h6',
    title: 'Tottenham close to £45m deal for Serie A sensation as Postecoglou gets his man',
    description: 'Tottenham are reportedly close to completing a £45m deal for the Serie A sensation, with Ange Postecoglou finally getting his priority target.',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Tottenham', 'Serie A'],
    publishedAt: '5 hours ago',
    author: 'Alasdair Gold',
    commentCount: 94
  },
  {
    id: 'h7',
    title: 'Newcastle United eye £70m Real Madrid star as Howe plans ambitious summer move',
    description: 'Newcastle United are eyeing a £70m move for the Real Madrid star as Eddie Howe plans an ambitious summer transfer to boost their European ambitions.',
    imageUrl: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Newcastle United', 'Real Madrid'],
    publishedAt: '6 hours ago',
    author: 'Craig Hope',
    commentCount: 67
  },
  {
    id: 'h8',
    title: 'West Ham secure £35m signing as Lopetegui gets defensive reinforcement',
    description: 'West Ham have secured a £35m signing for defensive reinforcement as Julen Lopetegui looks to shore up his backline for the second half of the season.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['West Ham', 'Julen Lopetegui'],
    publishedAt: '7 hours ago',
    author: 'Claret & Hugh',
    commentCount: 45
  },
  {
    id: 'h9',
    title: 'Aston Villa target £50m Bundesliga striker as Emery eyes Champions League boost',
    description: 'Aston Villa are targeting a £50m Bundesliga striker as Unai Emery looks to strengthen his attacking options for their Champions League campaign.',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Aston Villa', 'Bundesliga'],
    publishedAt: '8 hours ago',
    author: 'John Percy',
    commentCount: 82
  },
  {
    id: 'h10',
    title: 'Brighton reject £40m bid from Premier League rivals as Hurzeler stands firm',
    description: 'Brighton have rejected a £40m bid from Premier League rivals for their star player, with Fabian Hurzeler determined to keep his key assets.',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Brighton', 'Premier League'],
    publishedAt: '9 hours ago',
    author: 'Andy Naylor',
    commentCount: 58
  },
  {
    id: 'h11',
    title: 'Fulham complete £25m signing from La Liga as Silva adds attacking flair',
    description: 'Fulham have completed a £25m signing from La Liga as Marco Silva looks to add more attacking flair to his squad for the remainder of the season.',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Fulham', 'La Liga'],
    publishedAt: '10 hours ago',
    author: 'Matt Law',
    commentCount: 34
  },
  {
    id: 'h12',
    title: 'Crystal Palace hold firm on £80m valuation as European giants circle',
    description: 'Crystal Palace are holding firm on their £80m valuation of their star player despite interest from several European giants looking to secure his signature.',
    imageUrl: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Crystal Palace', 'Transfer News'],
    publishedAt: '11 hours ago',
    author: 'Malik Ouzia',
    commentCount: 76
  },
  {
    id: 'h13',
    title: 'Brentford eye Championship star as Thomas Frank plans squad depth',
    description: 'Brentford are eyeing a Championship star as Thomas Frank looks to add squad depth and maintain their Premier League status with smart recruitment.',
    imageUrl: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Brentford', 'Championship'],
    publishedAt: '12 hours ago',
    author: 'Tom Collomosse',
    commentCount: 29
  },
  {
    id: 'h14',
    title: 'Everton face £30m decision on star player as Dyche weighs up options',
    description: 'Everton face a crucial £30m decision on their star player as Sean Dyche weighs up his options ahead of the transfer deadline.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Everton', 'Sean Dyche'],
    publishedAt: '13 hours ago',
    author: 'Joe Thomas',
    commentCount: 91
  },
  {
    id: 'h15',
    title: 'Wolves target Serie A midfielder as O\'Neil seeks creative spark',
    description: 'Wolves are targeting a Serie A midfielder as Gary O\'Neil looks to add a creative spark to his squad and improve their attacking output.',
    imageUrl: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Wolves', 'Serie A'],
    publishedAt: '14 hours ago',
    author: 'Tim Spiers',
    commentCount: 47
  },
  {
    id: 'h16',
    title: 'Bournemouth secure loan deal for Premier League striker as Iraola gets reinforcement',
    description: 'Bournemouth have secured a loan deal for a Premier League striker as Andoni Iraola gets the attacking reinforcement he requested.',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Bournemouth', 'Loan Deal'],
    publishedAt: '15 hours ago',
    author: 'Neil Dewey',
    commentCount: 38
  },
  {
    id: 'h17',
    title: 'Sheffield United prepare Premier League return with £20m spending spree',
    description: 'Sheffield United are preparing for their Premier League return with a £20m spending spree as they look to avoid immediate relegation.',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Sheffield United', 'Championship'],
    publishedAt: '16 hours ago',
    author: 'Danny Hall',
    commentCount: 62
  },
  {
    id: 'h18',
    title: 'Leicester City eye Ligue 1 talent as Cooper builds for promotion push',
    description: 'Leicester City are eyeing Ligue 1 talent as Steve Cooper looks to build a squad capable of securing immediate promotion back to the Premier League.',
    imageUrl: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Leicester City', 'Ligue 1'],
    publishedAt: '17 hours ago',
    author: 'Jordan Blackwell',
    commentCount: 55
  },
  {
    id: 'h19',
    title: 'Southampton make £15m bid for League One sensation as Martin eyes future',
    description: 'Southampton have made a £15m bid for a League One sensation as Russell Martin looks to secure promising talent for the future.',
    imageUrl: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Southampton', 'League One'],
    publishedAt: '18 hours ago',
    author: 'Adam Blackmore',
    commentCount: 41
  },
  {
    id: 'h20',
    title: 'Nottingham Forest complete double signing as Nuno strengthens squad depth',
    description: 'Nottingham Forest have completed a double signing as Nuno Espirito Santo looks to strengthen his squad depth for their European campaign.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Nottingham Forest', 'Double Signing'],
    publishedAt: '19 hours ago',
    author: 'Sarah Clapson',
    commentCount: 73
  }
];
