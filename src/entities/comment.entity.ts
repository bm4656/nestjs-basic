import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common/common.entity';
import { UserEntity } from './user.entity';
import { ArticleEntity } from './article.entity';

@Entity('comment')
export class CommentEntity extends CommonEntity {
  @Column('text', { nullable: false })
  comment: string;

  @Column('bigint', { nullable: false })
  parentId: string | null;

  @Column('bigint', { nullable: false })
  userId: string | null;

  @Column('bigint', { nullable: false })
  articleId: string;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: UserEntity;

  @ManyToOne(() => ArticleEntity, (article) => article.comments)
  @JoinColumn({ name: 'articleId', referencedColumnName: 'id' })
  article: ArticleEntity;
}
