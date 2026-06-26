export interface VideoItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  thumbnail: string;
  /** Replace with your real video URL later (YouTube embed, mp4, etc.) */
  videoUrl: string;
}

// Replace `videoUrl` and `thumbnail` with your real assets later.
export const VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "Basic Typing for Beginners",
    description: "Learn the correct sitting posture and home row position.",
    duration: "08:24",
    category: "Basic Typing",
    thumbnail: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=70",
    videoUrl: "#",
  },
  {
    id: "v2",
    title: "Correct Finger Position",
    description: "Master which finger should press which key.",
    duration: "06:10",
    category: "Finger Position",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=70",
    videoUrl: "#",
  },
  {
    id: "v3",
    title: "5 Tricks to Increase Typing Speed",
    description: "Simple daily practice tricks to boost your WPM.",
    duration: "10:45",
    category: "Typing Speed",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=70",
    videoUrl: "#",
  },
  {
    id: "v4",
    title: "Computer Fundamentals",
    description: "Understand parts of a computer and how they work.",
    duration: "12:30",
    category: "Computer Basics",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=70",
    videoUrl: "#",
  },
  {
    id: "v5",
    title: "Microsoft Word Basics",
    description: "Create your first document in MS Word easily.",
    duration: "15:00",
    category: "MS Word",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=70",
    videoUrl: "#",
  },
  {
    id: "v6",
    title: "Internet Basics for Students",
    description: "How to safely use the internet for learning.",
    duration: "09:18",
    category: "Internet Basics",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=70",
    videoUrl: "#",
  },
  {
    id: "v7",
    title: "Digital Awareness",
    description: "Stay safe from online frauds and cyber crimes.",
    duration: "11:42",
    category: "Digital Awareness",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=70",
    videoUrl: "#",
  },
  {
    id: "v8",
    title: "Daily Typing Practice Tips",
    description: "How to make typing practice a daily habit.",
    duration: "07:55",
    category: "Practice Tips",
    thumbnail: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=70",
    videoUrl: "#",
  },
];
