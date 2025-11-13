import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import jesseAvatar from "@/assets/jesse-avatar.png";
const pageLinks = {
  companies: {
    url: "/for-companies",
    title: "Solutions for Companies"
  },
  individuals: {
    url: "/for-individuals",
    title: "Solutions for Individuals"
  },
  investors: {
    url: "/for-investors",
    title: "Solutions for Investors"
  },
  marketplace: {
    url: "/marketplace",
    title: "Marketplace"
  },
  solution: {
    url: "/solution",
    title: "Our Solution"
  },
  plan: {
    url: "/plan",
    title: "Start Planning"
  },
  resources: {
    url: "/resources",
    title: "Resources"
  },
  company: {
    url: "/company",
    title: "About Us"
  },
  whoweserve: {
    url: "/who-we-serve",
    title: "Who We Serve"
  },
  wellness: {
    url: "/employee-wellness",
    title: "Employee Wellness"
  },
  learn: {
    url: "/learn-and-listen",
    title: "Learn & Listen"
  },
  podcast: {
    url: "/podcast",
    title: "Podcast"
  },
  video: {
    url: "/video",
    title: "Videos"
  },
  blog: {
    url: "/blog",
    title: "Blog"
  }
};
const getRelevantLinks = (query: string): Array<{
  url: string;
  title: string;
}> => {
  const lowerQuery = query.toLowerCase();
  const links: Array<{
    url: string;
    title: string;
  }> = [];
  if (lowerQuery.match(/company|companies|business|employer|corporate|hr|eap/)) {
    links.push(pageLinks.companies, pageLinks.wellness);
  }
  if (lowerQuery.match(/individual|personal|myself|family|me|my/)) {
    links.push(pageLinks.individuals, pageLinks.plan);
  }
  if (lowerQuery.match(/investor|invest|funding|partnership/)) {
    links.push(pageLinks.investors);
  }
  if (lowerQuery.match(/marketplace|provider|service|partner/)) {
    links.push(pageLinks.marketplace);
  }
  if (lowerQuery.match(/solution|how|what|approach|framework/)) {
    links.push(pageLinks.solution);
  }
  if (lowerQuery.match(/plan|planning|start|begin|get started/)) {
    links.push(pageLinks.plan);
  }
  if (lowerQuery.match(/resource|guide|help|learn|education/)) {
    links.push(pageLinks.resources, pageLinks.learn);
  }
  if (lowerQuery.match(/about|who|team|mission|story/)) {
    links.push(pageLinks.company);
  }
  if (lowerQuery.match(/podcast|listen|audio/)) {
    links.push(pageLinks.podcast);
  }
  if (lowerQuery.match(/video|watch/)) {
    links.push(pageLinks.video);
  }
  if (lowerQuery.match(/blog|article|read/)) {
    links.push(pageLinks.blog);
  }
  if (lowerQuery.match(/wellness|wellbeing|employee/)) {
    links.push(pageLinks.wellness);
  }

  // Remove duplicates
  return Array.from(new Map(links.map(link => [link.url, link])).values());
};
const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{
    text: string;
    isUser: boolean;
    links?: Array<{
      url: string;
      title: string;
    }>;
  }>>([{
    text: "Hi! I'm Jesse, here to help you with your legacy planning. How can I assist you today?",
    isUser: false
  }]);
  const [inputValue, setInputValue] = useState("");
  const handleSend = () => {
    if (!inputValue.trim()) return;
    const userMessage = inputValue;
    setMessages([...messages, {
      text: userMessage,
      isUser: true
    }]);
    setInputValue("");

    // Get relevant links based on user query
    setTimeout(() => {
      const relevantLinks = getRelevantLinks(userMessage);
      const responseText = relevantLinks.length > 0 ? "I'd be happy to help! Here are some relevant pages that might interest you:" : "Thank you for your message. How can I assist you with your legacy planning today?";
      setMessages(prev => [...prev, {
        text: responseText,
        isUser: false,
        links: relevantLinks.length > 0 ? relevantLinks : undefined
      }]);
    }, 500);
  };
  return <div className="fixed bottom-6 right-6 z-50">
      {isOpen && <div className="mb-4 w-[350px] h-[500px] bg-background rounded-2xl shadow-2xl flex flex-col border border-border">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={jesseAvatar} alt="Jesse" className="w-8 h-8 rounded-full object-cover" />
              <span className="font-semibold">Jesse</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${message.isUser ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  <div>{message.text}</div>
                  {message.links && message.links.length > 0 && <div className="mt-3 space-y-2">
                      {message.links.map((link, linkIndex) => <a key={linkIndex} href={link.url} className="block p-2 bg-background/10 hover:bg-background/20 rounded transition-colors text-sm" onClick={() => setIsOpen(false)}>
                          → {link.title}
                        </a>)}
                    </div>}
                </div>
              </div>)}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyPress={e => e.key === "Enter" && handleSend()} placeholder="Type your message..." className="flex-1 focus-visible:ring-0 focus-visible:ring-offset-0" />
              <Button onClick={handleSend} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>}

      {/* Floating Button */}
      {!isOpen && <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={() => setIsOpen(true)} className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-2 shadow-lg transition-all hover:scale-105">
                <img src={jesseAvatar} alt="Chat" className="w-12 h-12 rounded-full object-cover" />
                <span className="absolute -top-3 -right-3 bg-destructive text-destructive-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  !
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-primary text-primary-foreground">
              <p>Chat with a support agent</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>}
    </div>;
};
export default AIChatBot;