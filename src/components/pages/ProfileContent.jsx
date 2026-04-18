import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import ProfileHistory from "./ProfileHistory";
import ProfileActions from "./ProfileActions";

function ProfileContent() {
  return (
    <div className="space-y-8">
      <ProfileHeader />

      <div className="border-t border-white/10 pt-8">
        <ProfileStats />
      </div>

      <div className="border-t border-white/10 pt-8">
        <ProfileHistory />
      </div>

      <ProfileActions />
    </div>
  );
}

export default ProfileContent;
