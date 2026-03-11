import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';
import { usePrototypeConfig } from '../hooks/usePrototypeConfig';

export function MockChatbot() {
    const config = usePrototypeConfig();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ sender: 'ai' | 'user', text: string }[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [hasOpened, setHasOpened] = useState(false);

    const businessName = config?.businessName || 'Nova Systems';

    useEffect(() => {
        // Auto-open after 5 seconds to grab attention
        const timer = setTimeout(() => {
            if (!hasOpened) {
                setIsOpen(true);
                setHasOpened(true);
                setMessages([
                    { sender: 'ai', text: `Hi there! I'm the AI Receptionist for ${businessName}.` },
                    { sender: 'ai', text: `Do you have an emergency, or would you like to book a free quote?` }
                ]);
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, [hasOpened, businessName]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userText = inputValue;
        setMessages(prev => [...prev, { sender: 'user', text: userText }]);
        setInputValue('');

        setTimeout(() => {
            setMessages(prev => [...prev, {
                sender: 'ai',
                text: `I can absolutely help with that! Let me grab a 15-minute slot on the calendar for you...`
            }]);
        }, 1200);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden mb-4 border border-gray-100 flex flex-col"
                        style={{ height: '400px' }}
                    >
                        {/* Header */}
                        <div className="bg-accent text-white p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold">{businessName} AI</h3>
                                    <p className="text-xs text-white/80">Typically replies instantly</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto bg-cream/30 flex flex-col gap-3">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'ai'
                                            ? 'bg-gray-100 text-gray-800 self-start rounded-tl-sm'
                                            : 'bg-accent text-white self-end rounded-tr-sm'
                                        }`}
                                >
                                    {msg.text}
                                </motion.div>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 border-t border-gray-100 bg-white flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                            />
                            <button
                                type="submit"
                                className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accent-light transition-colors"
                            >
                                <Send size={16} className="ml-0.5" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setIsOpen(true); setHasOpened(true); }}
                    className="w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 relative group"
                >
                    <MessageCircle size={24} />
                    {/* Unread badge dot */}
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-cream rounded-full"></span>
                </motion.button>
            )}
        </div>
    );
}
