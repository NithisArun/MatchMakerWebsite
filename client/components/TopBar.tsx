import { Bell, MessageSquare, Menu } from "lucide-react";

interface TopBarProps {
  title?: string;
  onMenuClick?: () => void;
}

const TopBar = ({ title = "Marketing", onMenuClick }: TopBarProps) => {
  return (
    <div className="w-full h-[70px] flex">
      {/* Main content - Full width */}
      <div className="w-full h-full bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] flex items-center justify-between px-4 lg:px-[33px]">
        {/* Left side - Mobile menu + Title */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
          >
            <Menu size={24} className="text-zinc-800" />
          </button>

          {/* Page Title */}
          <h1 className="font-open-sans text-xl lg:text-[27px] font-light leading-[32.4px] text-zinc-800">
            {title}
          </h1>
        </div>

        {/* Right side icons and profile */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Message Icon */}
          <MessageSquare size={24} className="text-zinc-800" />

          {/* Bell Icon */}
          <Bell size={24} className="text-zinc-800" />

          {/* Profile Image */}
          <div className="w-[42px] h-[42px] rounded-full overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b656d10fe63bee3067242a15a0f5861f56c4658e?width=84"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
