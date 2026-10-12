import files from './images.generated.json'

// ===== PHOTO SETTINGS =====
// Only files matching this pattern appear in the gallery (keeps stray downloads out). Change it if needed.
const includePattern = /^IMG_/i
// Optional: type an exact filename for the big images, e.g. 'IMG_0241.jpg'. Leave '' to auto-pick.
const heroFile = '', aboutFile = '', featuredFile = ''
// Optional per-photo details, keyed by filename. Anything you skip is filled in automatically.
const details = {
'IMG_4641.jpeg': { category: 'nature', title: 'Golden Grazing', caption: 'Quiet afternoon light on open ground.' },
'IMG_4668.jpeg': { category: 'street', title: 'Urban Appetite', caption: 'Capturing flavors under warm café lights.' },
'IMG_7371.jpeg': { category: 'creative', title: 'Matcha Motion', caption: 'Careful craft behind the barista counter.' },
'IMG_6306.jpeg': { category: 'nature', title: 'Dusk Silhouette', caption: 'Fading orange glow through leafy branches.' },
'IMG_6331.jpeg': { category: 'architecture', title: 'Rooftop Horizon', caption: 'Sun dipping low over terrace tanks.' },
'IMG_6911.jpeg': { category: 'architecture', title: 'Framed Sanctum', caption: 'Golden glow cut through marble shadow.' },
'IMG_6956.jpg': { category: 'creative', title: 'Floating Crimson', caption: 'Vibrant petals resting in dark water.' },
'IMG_6996.jpg': { category: 'creative', title: 'Quiet Bloom', caption: 'White lilies standing against empty space.' },
'IMG_6296.jpg': { category: 'nature', title: 'Amber Horizon', caption: 'Evening glow fading into cool shadows.' },
'IMG_7376.jpg': { category: 'architecture', title: 'Paved Perspective', caption: 'Modern corridor framed by tall greens.' },
'IMG_7383.jpg': { category: 'street', title: 'Sweet Arrangement', caption: 'Rich chocolate slices ready to share.' },
'IMG_7915.jpg': { category: 'travel', title: 'Ghat Currents', caption: 'Drifting gently toward illuminated ancient banks.' },
'IMG_8179.jpg': { category: 'creative', title: 'Drifting Frames', caption: 'Tortoise rims afloat on clear ripples.' },
'IMG_8827.jpg': { category: 'architecture', title: 'Warm Dusk', caption: 'Soft terrace glow beneath evening skies.' },
'IMG_9859.jpg': { category: 'street', title: 'Garden Diner', caption: 'Lively cafe night veiled in foliage.' },
'IMG_9864.jpg': { category: 'creative', title: 'Arrabbiata Twist', caption: 'Fresh tossed penne in rustic sauce.' },
'IMG_0241.jpg': { category: 'street', title: 'Chime In', caption: 'Rainy afternoon chatter outside coffee corner.' },
'IMG_4051.jpg': { category: 'street', title: 'Market Heaps', caption: 'Ripe harvest resting on wooden crates.' },
'IMG_4138.jpg': { category: 'street', title: 'Pastel Scoops', caption: 'Chilled gelato tubs lined in rows.' },
'IMG_0200.jpg': { category: 'nature', title: 'Layered Ridges', caption: 'Blue misty mountain folds stretching far.' },
'IMG_0208.jpg': { category: 'nature', title: 'Pine Canopy', caption: 'Deep green foliage framing morning fog.' },
'IMG_0199.jpg': { category: 'nature', title: 'Misty Valleys', caption: 'Rolling hills wrapped in soft haze.' },
'IMG_7584754897.jpeg': { category: 'nature', title: 'Pelican Haven', caption: 'Preening birds beside lush forest banks.' },
'IMG_0101.jpg': { category: 'creative', title: 'Color Blocks', caption: 'Vibrant painted bricks along the curb.' },
'IMG_4017.jpg': { category: 'creative', title: 'Minimal Sweet', caption: 'Delicate pastry plated with fresh fruit.' },
'IMG_0026.jpg': { category: 'nature', title: 'Sunset Tide', caption: 'Warm amber glow melting into ocean waves.' },
'IMG_6891.jpg': { category: 'nature', title: 'Midnight Canopy', caption: 'Gnarled mossy branches reaching under dark skies.' },
'IMG_8457348578.jpeg': { category: 'nature', title: 'Secret Stream', caption: 'Crystal water ripples through lush green enclosure.' },
'IMG_6892.jpg': { category: 'architecture', title: 'Illuminated Heritage', caption: 'Sprawling tree branches framing lit colonial windows.' },
'IMG_4800.jpg': { category: 'creative', title: 'Deep Cherries', caption: 'Glossy dark harvest piled in ceramic.' },
'IMG_7419.jpg': { category: 'architecture', title: 'Skyline Passage', caption: 'Golden evening framed between urban towers.' },
'IMG_3535.jpg': { category: 'creative', title: 'Open Shutter', caption: 'Quiet courtyard framed through rustic sill.' },
'IMG_3655.jpg': { category: 'street', title: 'Diner Rhythm', caption: 'Warm kitchen bustle under industrial lights.' },
'IMG_1140.jpg': { category: 'street', title: 'Pavement Prints', caption: 'Stacked stories and art on sidewalk.' },
'IMG_4678.jpg': { category: 'architecture', title: 'Shadow Loft', caption: 'Timber stairs climbing through moody shadows.' },
'IMG_4910.jpg': { category: 'creative', title: 'Dim Workspace', caption: 'Filtered daylight meeting soft screen glows.' },
'IMG_0023.jpeg': { category: 'nature', title: 'Above Clouds', caption: 'Drifting high over endless velvet horizons.' },
}
const matched = files.filter(f => includePattern.test(f))
const photos = matched.length ? matched : files
const img = f => (f ? `/images/${encodeURIComponent(f)}` : '')

// ALL editable content lives here. Replace images in /public/images using the same filenames,
// or change the `image` paths below.

export const site = {
  theme: 'light', // 'light' | 'blush' | 'sage'
  name: 'Aadya Singh',
  brand: 'Aadya Singh — Photography',
  label: 'Photography Portfolio · 2026',
  headline: 'Through My Lens.',
  subline: 'Capturing the beauty of everyday moments, one frame at a time.',
  // Contact: leave '' to hide. Nothing is invented.
  email: 'aadyakhadi@gmail.com',        // e.g. 'aadya@example.com'
  instagram: 'https://instagram.com/a.addyy_',    // e.g. 'https://instagram.com/yourhandle'
  society: '',      // e.g. 'https://yourcollege.edu/photography-society'
  societyName: 'College Photography Society',
  images: { hero: img(heroFile || photos[0]), about: img(aboutFile || photos[1]) },
}

export const categories = [
  { key: 'all', label: 'All Work', full: 'All Work' },
  { key: 'portrait', label: 'Portraits', full: 'Portrait Photography' },
  { key: 'nature', label: 'Nature', full: 'Nature & Landscapes' },
  { key: 'street', label: 'Street', full: 'Street Photography' },
  { key: 'architecture', label: 'Architecture', full: 'Architecture & Details' },
  { key: 'creative', label: 'Creative', full: 'Creative & Experimental' },
]

const catKeys = ['portrait', 'nature', 'street', 'architecture', 'creative']
// Default titles and one-line descriptions per category (used when a photo has no entry in `details`).
const text = {
  portrait: [['The Quiet Gaze', 'A calm expression that says more than words.'], ['A Moment Unscripted', 'A natural, unposed moment.'], ['Unspoken Stories', 'Emotion held in a small gesture.'], ['Soft Light', 'Gentle light shaping a familiar face.'], ['Candid Frame', 'Caught between one moment and the next.'], ['Character Study', 'Personality showing through the details.']],
  nature: [['Golden Hour', 'Warm light settling over the scene.'], ['Nature in Stillness', 'Quiet details of the natural world.'], ['After the Rain', 'Freshness lingering in the air.'], ['Open Skies', 'Space, colour and a wide horizon.'], ['Leaf and Light', 'Small textures glowing in sunlight.']],
  street: [['Between the Streets', 'A passing moment in a busy lane.'], ['Stories in Motion', 'Everyday life, always on the move.'], ['The World in Details', 'Small things that make a place.'], ['Everyday Rhythm', 'The ordinary beat of a day.'], ['A Place in Passing', 'A scene noticed on the way.']],
  architecture: [['Lines of Silence', 'Geometry that holds its breath.'], ['Light and Perspective', 'Looking up changes everything.'], ['Fragments of Light', 'Light broken into pieces.'], ['Structure and Shadow', 'Form revealed by contrast.'], ['Looking Up', 'A building seen from a new angle.']],
  creative: [['The Art of Shadows', 'Darkness shaping the frame.'], ['Reflections', 'A second world inside the first.'], ['Beyond the Ordinary', 'An everyday scene, seen differently.'], ['Colour Play', 'Hues leading the eye.'], ['Another Angle', 'Trying a different point of view.']],
}
export const gallery = photos.map((file, i) => {
  const o = details[file] || {}
  const category = o.category || catKeys[i % catKeys.length]
  const t = text[category][Math.floor(i / catKeys.length) % text[category].length]
  const title = o.title || t[0], caption = o.caption || t[1]
  return { ...o, id: i + 1, title, category, caption, image: img(file), alt: `${title}. ${caption}` }
})

export const about = {
  heading: 'Behind the Lens',
  intro: "Hello, I'm Aadya Singh. Photography is my way of noticing the little things that often go unseen — the way light falls across a face, the character of a place, or the emotion hidden in an ordinary moment. Through my photographs, I hope to tell stories, experiment with perspectives, and continue discovering my own creative voice.",
  paragraphs: [
    { title: 'My approach', text: 'I slow down before I press the shutter. I look at where the light is coming from, what sits at the edges of the frame, and what feels worth keeping.' },
    { title: 'What photography means to me', text: 'It teaches me to pay attention. A frame is a small decision about what matters, and I enjoy that quiet kind of storytelling.' },
    { title: 'Why the Photography Society', text: 'I want to learn from other photographers, take on shared projects, and get honest feedback that pushes my work further.' },
  ],
}

export const interests = [
  { title: 'Portraits & Human Emotions', text: 'Expressions, gestures and the stories people carry.' },
  { title: 'Nature & Natural Light', text: 'Chasing the way daylight changes a landscape.' },
  { title: 'Street & Everyday Life', text: 'Unposed scenes from ordinary days.' },
  { title: 'Architecture & Composition', text: 'Lines, symmetry and the geometry of spaces.' },
  { title: 'Experimental Visual Storytelling', text: 'Reflections, shadows and unusual angles.' },
]

export const process = {
  heading: 'Every Frame Tells a Story',
  steps: [
    { title: 'Observe', text: 'Finding beauty, emotion, and stories in ordinary moments.' },
    { title: 'Compose', text: 'Exploring framing, light, perspective, colour, and balance.' },
    { title: 'Capture', text: 'Preserving a fleeting moment through a thoughtful photograph.' },
  ],
}

export const featured = {
  image: img(featuredFile || photos[2]),
  alt: 'Featured photograph by Aadya Singh',
  heading: 'One moment. A thousand stories.',
  caption: 'My favourite frame. Replace this with the photograph that means the most to you.',
}

// "My Journey" timeline: edit freely, add or remove entries. Replace these prompts with your real story.
export const journey = {
  heading: 'My Journey',
  entries: [
    { when: 'Beginning', title: 'Where it started', text: 'Write about the moment you first picked up a camera or phone and began noticing things.' },
    { when: 'Exploring', title: 'Trying new genres', text: 'Describe what you experimented with: portraits, street, nature, architecture or something unusual.' },
    { when: 'Learning', title: 'What I am learning', text: 'Mention skills you are practising, such as composition, editing or working with natural light.' },
    { when: 'Next', title: 'Where I want to go', text: 'Share what you hope to do with the Photography Society.' },
  ],
}

// Gear & skills: leave empty ([]) to hide the section.
export const toolkit = {
  heading: 'Toolkit',
  items: [
    { title: 'Camera', text: 'Add your camera or phone model.' },
    { title: 'Editing', text: 'Add the apps you edit with.' },
    { title: 'Favourite style', text: 'Describe your editing style in a few words.' },
  ],
}
