// import { useEffect, useState } from 'react';
// import supabase from '../apps/auth/utils/supabase';



 

// const ProfilePage = () => {
//     const [profile, setProfile] = useState<any>(null);

//     useEffect(() => {
//         const fetchProfile = async () => {
//             const user = supabase.auth.user();
//             if (user) {
//                 let { data: profile, error } = await supabase
//                     .from('profiles')
//                     .select('*')
//                     .eq('id', user.id)
//                     .single();

//                 if (error) {
//                     console.error(error);
//                 } else {
//                     setProfile(profile);
//                 }
//             }
//         };

//         fetchProfile();
//     }, []);

//     if (!profile) return <div>Loading...</div>;

//     return (
//         <div>
//             <h1>{profile.name}'s Profile</h1>
//             <p>Email: {profile.email}</p>
//             <p>Phone: {profile.phone}</p>
//             {/* Add other profile fields as needed */}
//         </div>
//     );
// };

// export default ProfilePage;
