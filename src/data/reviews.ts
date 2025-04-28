export interface MovieReview {
  id: string;
  title: string;
  movieTitle: string;
  director: string;
  year: number;
  rating: number;
  poster: string;
  images: string[];
  synopsis: string;
  content: string;
  date: string;
  author: string;
  genre: string[];
}

export const movieReviews: MovieReview[] = [
  {
    id: "dune-part-two",
    title: "Dune: Part Two - An Epic Continuation of Frank Herbert's Vision",
    movieTitle: "Dune: Part Two",
    director: "Denis Villeneuve",
    year: 2024,
    rating: 4.5,
    poster: "https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg",
    images: [
      "https://images.pexels.com/photos/1738975/pexels-photo-1738975.jpeg",
      "https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg",
      "https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg"
    ],
    synopsis: "Paul Atreides joins forces with the Fremen of Arrakis to avenge his family and fulfill a dangerous prophecy in this epic continuation of the sci-fi saga.",
    content: `
      <p>Denis Villeneuve completes his adaptation of the first Dune novel with a film that exceeds even the high bar set by its predecessor. "Dune: Part Two" evolves from political intrigue to messianic journey, following Paul Atreides (Timothée Chalamet) as he embraces his role among the Fremen and plots revenge against House Harkonnen.</p>
      
      <p>Visually, the film is nothing short of breathtaking. Greig Fraser's cinematography captures the harsh beauty of Arrakis with frames that deserve to be studied in film schools for generations. The sandworm sequences, in particular, convey a sense of awe and terror that few sci-fi films have ever achieved. Hans Zimmer's score complements these visuals perfectly, blending ancient-sounding vocal elements with futuristic instrumentation to create something that feels simultaneously primordial and otherworldly.</p>
      
      <p>While the first film had to dedicate significant time to world-building, "Part Two" benefits from the established foundation, allowing for deeper character development. Chalamet effectively portrays Paul's internal conflict as he struggles between embracing his destiny and fearing the jihad he foresees in his visions. Rebecca Ferguson delivers a standout performance as Lady Jessica, whose transformation from concerned mother to Reverend Mother carries significant emotional weight.</p>
      
      <p>New additions to the cast make immediate impressions. Austin Butler's ferocious portrayal of Feyd-Rautha provides a dark mirror to Paul's journey, while Florence Pugh brings nuance to a relatively limited role as Princess Irulan. Zendaya, whose presence was minimal in the first installment, fully realizes Chani as the moral compass of the story, questioning the implications of Paul's messianic rise.</p>
      
      <p>Villeneuve's handling of Herbert's themes about the dangers of charismatic leadership and religious fanaticism is particularly impressive. The film doesn't shy away from the morally ambiguous elements of Paul's journey, especially as he begins to manipulate Fremen prophecies for his purposes. This complexity distinguishes "Dune" from more simplistic hero's journeys that dominate the sci-fi landscape.</p>
      
      <p>The action sequences are precisely choreographed and visually distinct, with the shield-penetrating fighting techniques creating a unique visual language for combat. The assault on Arrakeen serves as a thrilling climax that balances spectacular set pieces with emotionally resonant character moments.</p>
      
      <p>If the film has weaknesses, they largely stem from the source material's density. Even at 166 minutes, certain elements feel compressed, particularly some of the political machinations involving the Spacing Guild and the Emperor. However, Villeneuve demonstrates remarkable skill in distilling the essential elements of Herbert's complex novel while maintaining its philosophical core.</p>
      
      <p>"Dune: Part Two" represents blockbuster filmmaking at its finest—intellectually engaging, emotionally resonant, and visually stunning. It completes one of the most successful adaptations of previously "unfilmable" material in cinema history while establishing itself as a landmark achievement in science fiction filmmaking.</p>
    `,
    date: "April 5, 2025",
    author: "Jonathan Blake",
    genre: ["Science Fiction", "Adventure", "Drama"]
  },
  {
    id: "past-lives",
    title: "Past Lives - A Delicate Meditation on Roads Not Taken",
    movieTitle: "Past Lives",
    director: "Celine Song",
    year: 2023,
    rating: 5.0,
    poster: "https://images.pexels.com/photos/15952368/pexels-photo-15952368.jpeg",
    images: [
      "https://images.pexels.com/photos/15952183/pexels-photo-15952183.jpeg",
      "https://images.pexels.com/photos/15952130/pexels-photo-15952130.jpeg",
      "https://images.pexels.com/photos/15952123/pexels-photo-15952123.jpeg"
    ],
    synopsis: "Two childhood friends reconnect after decades apart, exploring the concept of love, fate, and the roads not taken across different stages of their lives.",
    content: `
      <p>Celine Song's directorial debut "Past Lives" achieves what many filmmakers spend careers attempting: a love story that feels simultaneously deeply specific and universally resonant. Through its deceptively simple narrative spanning decades, the film explores questions of identity, fate, and the infinite possibilities contained within the choices we make.</p>
      
      <p>At its center are Nora (Greta Lee) and Hae Sung (Teo Yoo), childhood friends in Korea who lose touch when Nora's family emigrates to Canada, only to reconnect years later. The film unfolds across three distinct periods: their childhood connection, a brief reconnection via video calls in their twenties, and finally, a meeting in New York when Nora is married to Arthur (John Magaro).</p>
      
      <p>What distinguishes "Past Lives" is its profound emotional intelligence and restraint. Song avoids melodramatic confrontations or tidy resolutions, instead allowing the unspoken to carry much of the narrative weight. Conversations happen in glances and silences as much as through dialogue, creating a sense of intimacy that makes the audience feel like privileged observers of profoundly private moments.</p>
      
      <p>The performances are extraordinary in their subtlety. Lee brilliantly portrays Nora's complex negotiation of her Korean heritage and American present, while Yoo's Hae Sung embodies a quiet dignity and acceptance of life's uncertainties. Perhaps most surprising is Magaro's nuanced performance as Arthur, who could easily have been positioned as an obstacle but instead becomes a compassionate witness to a connection he can understand but never fully share.</p>
      
      <p>Cinematographer Shabier Kirchner creates compositions of striking beauty without ever calling attention to the technique. New York and Seoul are captured not as tourist destinations but as lived environments that shape the characters' experiences. The film's visual language employs distance and proximity to reflect the emotional landscape, from video calls that connect across continents to the charged space between two people sitting beside each other on a bench.</p>
      
      <p>The Korean concept of "in-yun"—the connections between people that span multiple lifetimes—provides a philosophical framework that enriches the narrative without overwhelming it. Song explores how cultural concepts shape our understanding of relationships while acknowledging the universal experience of wondering "what if" about paths not taken.</p>
      
      <p>In its quiet way, "Past Lives" achieves something profound: it makes us feel the weight of all our own choices, connections, and missed opportunities while affirming the beauty inherent in life's imperfect journey. It's a film that lingers in the mind and heart long after viewing, inviting reflection on our own past lives and the ways they continue to shape who we are.</p>
    `,
    date: "March 20, 2025",
    author: "Sophia Martinez",
    genre: ["Drama", "Romance"]
  },
  {
    id: "poor-things",
    title: "Poor Things - A Baroque Feminist Odyssey",
    movieTitle: "Poor Things",
    director: "Yorgos Lanthimos",
    year: 2023,
    rating: 4.5,
    poster: "https://images.pexels.com/photos/3954635/pexels-photo-3954635.jpeg",
    images: [
      "https://images.pexels.com/photos/3954261/pexels-photo-3954261.jpeg",
      "https://images.pexels.com/photos/3954620/pexels-photo-3954620.jpeg",
      "https://images.pexels.com/photos/3954383/pexels-photo-3954383.jpeg"
    ],
    synopsis: "A young woman brought back to life by an eccentric scientist embarks on an odyssey of self-discovery and liberation in this darkly comic, visually stunning adaptation.",
    content: `
      <p>Yorgos Lanthimos's "Poor Things" defies easy categorization, blending elements of gothic horror, black comedy, steampunk aesthetics, and feminist parable into something wholly unique. Based on Alasdair Gray's novel but significantly reimagined, the film follows Bella Baxter (Emma Stone), a woman resurrected by the eccentric surgeon Godwin Baxter (Willem Dafoe) with the brain of her unborn child, as she embarks on a journey of self-discovery that doubles as a subversive coming-of-age tale.</p>
      
      <p>Stone delivers a career-defining performance as Bella, whose accelerated development from childlike innocence to intellectual and sexual awakening requires an actor of remarkable range. She creates a character who feels entirely original—physically inhabiting Bella's evolving relationship with her own body while conveying her rapidly expanding consciousness. The performance is fearless in both its physical comedy and emotional vulnerability.</p>
      
      <p>Visually, the film represents production design at its most imaginative. Lanthimos and cinematographer Robbie Ryan create a surreal Victorian world of curved architecture, anatomical curiosities, and mechanical contrivances, shot with fish-eye lenses that enhance the sense of distortion. Each location—from Baxter's laboratory to Paris brothels to Mediterranean cruise ships—creates a distinct visual palette while maintaining a cohesive aesthetic that suggests a world adjacent to but distinct from our historical reality.</p>
      
      <p>The supporting cast matches Stone's commitment to Lanthimos's distinct tone. Mark Ruffalo brings unexpected dimensions to the caddish lawyer Duncan Wedderburn, finding the pathetic fragility beneath his libertine bravado. Dafoe's Godwin Baxter balances scientific detachment with paternal affection, while Ramy Youssef provides a necessary moral anchor as his assistant Max McCandles.</p>
      
      <p>What elevates "Poor Things" beyond its visual splendor is its incisive exploration of freedom, agency, and social constraint. Through Bella's unfiltered perspective, the film examines everything from sexual politics to economic exploitation, religious hypocrisy to psychological control. Her journey from object of experimentation to author of her own destiny inverts traditional narratives about "fallen women" while questioning the foundations of a society built on various forms of exploitation.</p>
      
      <p>Lanthimos's direction maintains a delicate balance between the grotesque and the beautiful, the comic and the profound. Jerzy Skolimowski's score complements this duality, combining classical elements with dissonant modern flourishes that underscore the film's temporal ambiguity.</p>
      
      <p>"Poor Things" will undoubtedly prove divisive with its graphic sexuality, moral ambiguity, and refusal to provide comfortable resolutions. Yet it represents cinema at its most ambitious and imagination at its most unfettered—a rare film that creates its own visual and narrative language rather than following established conventions.</p>
    `,
    date: "March 8, 2025",
    author: "Marcus Chen",
    genre: ["Science Fiction", "Comedy", "Drama"]
  },
  {
    id: "killers-of-the-flower-moon",
    title: "Killers of the Flower Moon - Scorsese's American Tragedy",
    movieTitle: "Killers of the Flower Moon",
    director: "Martin Scorsese",
    year: 2023,
    rating: 4.5,
    poster: "https://images.pexels.com/photos/3692011/pexels-photo-3692011.jpeg",
    images: [
      "https://images.pexels.com/photos/1586847/pexels-photo-1586847.jpeg",
      "https://images.pexels.com/photos/1051549/pexels-photo-1051549.jpeg",
      "https://images.pexels.com/photos/3692627/pexels-photo-3692627.jpeg"
    ],
    synopsis: "The true story of a series of murders targeting wealthy Osage Nation members in 1920s Oklahoma, and the birth of the FBI investigation that followed.",
    content: `
      <p>At age 80, Martin Scorsese delivers one of his most ambitious and morally complex films with "Killers of the Flower Moon," a sweeping historical epic that examines a shameful chapter of American history with unflinching clarity. Based on David Grann's non-fiction bestseller, the film chronicles the systematic murder of Osage Nation members in 1920s Oklahoma after oil was discovered on their land.</p>
      
      <p>Rather than approaching the material as a conventional thriller or whodunit, Scorsese reconfigures the narrative to focus on the relationship between Ernest Burkhart (Leonardo DiCaprio) and Mollie Kyle (Lily Gladstone), positioning their marriage as a microcosm of the larger exploitation. This structural choice transforms what could have been a procedural into a profound examination of complicity, betrayal, and the banality of evil.</p>
      
      <p>DiCaprio delivers his most challenging performance as Ernest, a weak-willed man caught between his love for his Osage wife and loyalty to his manipulative uncle William Hale (Robert De Niro). DiCaprio's willingness to portray Ernest's moral vacuity without softening his character's culpability demonstrates remarkable commitment to the story's integrity.</p>
      
      <p>However, it's Gladstone who emerges as the film's beating heart and moral center. Her portrayal of Mollie combines dignity with vulnerability as she navigates both her deteriorating health and growing suspicion about the deaths surrounding her community. Through Mollie's perspective, the audience experiences both the specific horrors inflicted on the Osage and the universal human experience of betrayal by those closest to us.</p>
      
      <p>De Niro completes the central triangle with a chilling portrayal of Hale, whose avuncular façade barely conceals calculating malevolence. Their scenes together recall the electric dynamic of "Goodfellas" and "Casino," but filtered through the lens of historical atrocity rather than organized crime.</p>
      
      <p>Cinematographer Rodrigo Prieto captures the Oklahoma landscape with epic grandeur while employing intimate, often uncomfortable closeups that force viewers to confront the human cost of greed. The period detail—from the oil derricks that transformed the region to the Osage cultural practices—is meticulous without ever feeling like mere historical recreation.</p>
      
      <p>At 206 minutes, the film demands patience, but its deliberate pacing serves a purpose, allowing the horror to build gradually and inescapably. Scorsese refuses to sensationalize violence, instead emphasizing the calculated, bureaucratic nature of the conspiracy, where murder becomes simply a business transaction.</p>
      
      <p>"Killers of the Flower Moon" stands as both a damning indictment of America's treatment of Indigenous peoples and a universal parable about the corrosive effects of greed. It represents American historical filmmaking at its most honest and essential—asking audiences not just to acknowledge a historical wrong but to understand the systemic forces and individual choices that allowed it to happen.</p>
    `,
    date: "February 15, 2025",
    author: "Amara Washington",
    genre: ["Crime", "Drama", "History"]
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer - Nolan's Nuclear Masterpiece",
    movieTitle: "Oppenheimer",
    director: "Christopher Nolan",
    year: 2023,
    rating: 5.0,
    poster: "https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg",
    images: [
      "https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg",
      "https://images.pexels.com/photos/924838/pexels-photo-924838.jpeg",
      "https://images.pexels.com/photos/2064293/pexels-photo-2064293.jpeg"
    ],
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    content: `
      <p>Christopher Nolan's "Oppenheimer" represents the director at the height of his powers, blending ambitious storytelling techniques with profound thematic concerns to create a biopic that transcends the limitations of the genre. Rather than a conventional cradle-to-grave narrative, Nolan structures the film around two parallel timelines: Oppenheimer's development of the atomic bomb (shot in expansive IMAX color) and his later security hearing (presented in austere black and white), creating a dialectic that examines both the scientific achievement and its moral aftermath.</p>
      
      <p>Cillian Murphy disappears completely into the role of J. Robert Oppenheimer, capturing both the theoretical physicist's brilliant mind and his tormented soul. Murphy conveys Oppenheimer's charisma and intellectual passion while suggesting the weight of responsibility that would eventually consume him. The performance is remarkably internal yet completely accessible, allowing audiences to understand both Oppenheimer's scientific drive and his growing horror at its implications.</p>
      
      <p>The supporting cast creates a vivid portrait of the scientific, military, and political communities surrounding the Manhattan Project. Robert Downey Jr. delivers his finest dramatic performance as Lewis Strauss, whose personal resentment toward Oppenheimer drives the security hearing. Emily Blunt brings depth to Kitty Oppenheimer, avoiding the typical "supportive wife" tropes to create a character with her own intellectual force and personal struggles.</p>
      
      <p>Technically, the film represents a stunning achievement. Hoyte van Hoytema's cinematography alternates between the vast New Mexico landscapes that dwarf even the momentous events occurring within them and claustrophobic hearing rooms where careers and reputations are destroyed. The Trinity test sequence stands as one of Nolan's most extraordinary set pieces, conveying both the awesome power of the first nuclear detonation and the existential dread it inspired in its creators.</p>
      
      <p>Ludwig Göransson's score deserves special mention for its ability to build tension even in scenes of theoretical physics discussions, using orchestral elements and dissonant electronic components to suggest both scientific progress and impending doom.</p>
      
      <p>What elevates "Oppenheimer" beyond technical virtuosity is its unwavering focus on the moral questions at the heart of modern science. The film presents multiple perspectives on the bombing of Hiroshima and Nagasaki without offering simplistic judgments, instead asking viewers to grapple with the same impossible ethical calculations faced by the historical figures. Oppenheimer's famous quotation of the Bhagavad Gita—"Now I am become Death, the destroyer of worlds"—resonates throughout the film as both scientific triumph and spiritual despair.</p>
      
      <p>At three hours, the film demands attention and engagement, with dense discussions of physics, politics, and ethics that never pander to the audience. Yet it remains accessible through its focus on the human elements of the story—ambition, jealousy, patriotism, guilt—that transcend its specific historical moment.</p>
      
      <p>"Oppenheimer" stands as a landmark achievement in biographical filmmaking and a profound meditation on the relationship between scientific progress and moral responsibility that feels increasingly relevant in our own era of technological uncertainty.</p>
    `,
    date: "January 28, 2025",
    author: "Daniel Park",
    genre: ["Biography", "Drama", "History"]
  },
  {
    id: "barbie",
    title: "Barbie - A Pink Revolution",
    movieTitle: "Barbie",
    director: "Greta Gerwig",
    year: 2023,
    rating: 4.0,
    poster: "https://images.pexels.com/photos/4145349/pexels-photo-4145349.jpeg",
    images: [
      "https://images.pexels.com/photos/8259637/pexels-photo-8259637.jpeg",
      "https://images.pexels.com/photos/18363421/pexels-photo-18363421/free-photo-of-photography-of-a-woman-wearing-a-hat.jpeg",
      "https://images.pexels.com/photos/4233094/pexels-photo-4233094.jpeg"
    ],
    synopsis: "Barbie experiences an existential crisis that leads her from the perfection of Barbieland into the real world, exploring themes of identity, feminism, and societal expectations.",
    content: `
      <p>Greta Gerwig accomplishes something extraordinary with "Barbie," transforming what could have been a cynical corporate product into a genuinely subversive, emotionally resonant, and frequently hilarious meditation on gender, identity, and consumer culture. It's a high-wire act that somehow manages to critique the very product it's marketing while delivering a visually dazzling summer blockbuster.</p>
      
      <p>The film begins in "Barbieland," a pink-saturated utopia where Barbies of all professions and ethnicities live in harmony, while Kens exist solely in relation to them. Stereotypical Barbie (Margot Robbie) begins experiencing unprecedented thoughts of death and physical imperfections, leading her to venture into the real world to discover the source of her existential crisis, with lovestruck Ken (Ryan Gosling) following in pursuit.</p>
      
      <p>Robbie proves the perfect casting choice, embodying Barbie's plastic perfection while gradually revealing the complex emotions developing beneath the surface. Her journey from blissful ignorance to painful awareness and ultimately to empowered self-acceptance forms the emotional core of the film. Gosling delivers a scene-stealing performance as Ken, committing fully to both the character's initial simple-minded devotion to Barbie and his subsequent patriarchal awakening in the real world.</p>
      
      <p>Visually, the film is a triumph of production design. Sarah Greenwood creates a Barbieland that perfectly replicates the plastic aesthetic of the toys down to the smallest detail, from the painted-on showers to the hinged feet that keep Barbie perpetually en pointe. Jacqueline Durran's costume design similarly dazzles with its recreation and reinvention of iconic Barbie outfits across the decades.</p>
      
      <p>Gerwig and co-writer Noah Baumbach's script manages to be simultaneously accessible and layered with meaning. The film addresses complex feminist theory through comedy without ever feeling didactic, while questions about authenticity, corporate feminism, and the meaning of humanity itself emerge organically from the premise. The film acknowledges the legitimate criticisms of Barbie's impact on body image and gender roles while also celebrating what the doll has meant to generations of children.</p>
      
      <p>Mark Ronson and Andrew Wyatt's original songs enhance the storytelling, from the Dua Lipa dance number that establishes Barbieland's ethos to Gosling's surprisingly moving "I'm Just Ken" that captures the character's existential crisis.</p>
      
      <p>If the film occasionally struggles, it's in the transition from its satirical first half to the more emotionally grounded third act. The messaging sometimes becomes explicit in ways that undermine the film's otherwise deft handling of its themes. America Ferrera's monologue about the impossible standards facing women, while well-performed, feels somewhat disconnected from the film's established tone.</p>
      
      <p>Nevertheless, "Barbie" represents a remarkable achievement in mainstream filmmaking—a feminist Trojan horse packaged in pink plastic that manages to entertain viewers of all ages while inviting them to question the very cultural forces that created both the doll and the film itself.</p>
    `,
    date: "January 12, 2025",
    author: "Evelyn Rodriguez",
    genre: ["Comedy", "Adventure", "Fantasy"]
  }
];