interface ProfileCardProps {
  profile: {
    id: string;
    name: string;
    age: number;
    height: string;
    caste: string;
    location: string;
    profession: string;
    maritalStatus: string;
    image: string;
    status: "free" | "premium" | "deactivated";
  };
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const getBorderColor = () => {
    switch (profile.status) {
      case "premium":
        return "border-emerald-300";
      case "deactivated":
        return "border-rose-300";
      default:
        return "border-slate-300";
    }
  };

  return (
    <div
      className={`w-[354px] h-[163px] rounded-lg border bg-white ${getBorderColor()} relative`}
    >
      <img
        src={profile.image}
        alt={profile.name}
        className="w-[108px] h-[147px] rounded-md object-cover absolute left-2 top-2"
      />

      <div className="absolute left-[127px] top-[14px] w-[203px] h-[130px] flex flex-col gap-2">
        <h3 className="text-black font-open-sans text-lg font-semibold">
          {profile.name}
        </h3>

        <div className="flex items-center gap-[6px]">
          <span className="px-2 py-[6px] bg-slate-100 rounded text-slate-800 font-open-sans text-xs font-semibold">
            {profile.age} Y
          </span>
          <span className="px-2 py-[6px] bg-slate-100 rounded text-slate-800 font-open-sans text-xs font-semibold">
            {profile.height}
          </span>
          <span className="px-2 py-[6px] bg-slate-100 rounded text-slate-800 font-open-sans text-xs font-semibold">
            {profile.caste}
          </span>
        </div>

        <div className="text-slate-700 font-open-sans text-sm">
          <span className="text-slate-600">Location : </span>
          <span className="text-slate-800">{profile.location}</span>
        </div>

        <div className="text-slate-700 font-open-sans text-sm">
          <span className="text-slate-600">Profession : </span>
          <span className="text-slate-800">{profile.profession}</span>
        </div>

        <div className="text-slate-700 font-open-sans text-sm">
          <span className="text-slate-600">Marital status : </span>
          <span className="text-slate-800">{profile.maritalStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
