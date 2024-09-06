import { profileIntro } from '../../CONSTANT/CONSTANT';
import { PersonalInfoStyled, ProfilePhotoContainer, ProfilePhoto, PersonalText } from './PersonalInfo.styled';

export default function PersonalInfo() {
  return (
    
    <PersonalInfoStyled>

      <ProfilePhotoContainer>
        <ProfilePhoto />
      </ProfilePhotoContainer>

      <PersonalText>
        <h2>Prabin K C</h2>
        <p>{profileIntro}</p>
      </PersonalText>

    </PersonalInfoStyled>
  );
}
