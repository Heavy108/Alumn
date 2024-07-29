// pages/alumni.js
import {Admin_details} from '@/Js/Data';
import Image from 'next/image';
import styles from '@/css/Admin.module.css';
import Title from '@/Components/Title';
import Link from 'next/link';

export default function Alumni() {
  return (
    <>
    <Title title="Admin"/>
    <div className={styles.container}>
      <h3>Alumni Members</h3>
      <div className={styles.grid}>
        {Object.keys(Admin_details).map((key) => {
          const member = Admin_details[key];
          return (
            <div key={key} className={styles.card}>
              <Image 
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className={styles.image}
              />
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
              {member.designation2 && <p>{member.designation2}</p>}
              {member.programme && <p>{member.programme}</p>}
              {member.roll_no && <p>{member.roll_no}</p>}
              <Link href={`mailto:${member.email}`}>{member.email}</Link>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
