import { Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { CommonEntity } from './common/common.entity';
import { UserEntity } from './user.entity';
import { CommentEntity } from './comment.entity';

@Entity('Article')
export class ArticleEntity extends CommonEntity {
  @Column('varchar', { unique: false, nullable: false })
  title: string;

  @Column('text', { unique: false, nullable: false })
  content: string;

  @Column('bigint', { unique: false, nullable: false })
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.articles)
  user: UserEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity[];
}
