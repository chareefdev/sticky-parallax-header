import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './SectionItem.module.css';

const SectionItem = ({index, title, description, imageName}) => {
  const isOdd = index % 2 === 0

  const renderImage = () => {
    return (
      <div className={clsx("col col--6", styles.imageWrapper)}>
        <img
          className={index !== 2 ? styles.image : styles.smallerImage}
          src={useBaseUrl(`/img/${imageName}.png`)}
          alt={imageName}
        />
      </div>
    )
  }

  const renderContent = () => {
    return (
      <div className={clsx("col col--6", styles.contentWrapper)}>
        <div className={styles.content}>
          <h3 className={styles.sectionTitle}>
            {title}
          </h3>
          <div className={styles.sectionDescription}>
            {description}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className={ isOdd ? styles.backgroundOdd : styles.backgroundEven }>
      <div className={clsx('container', styles.container)}>
        {isOdd
          ?
          <div className={clsx("row", styles.row)}>
            {renderContent()}
            {renderImage()}
          </div>
          :
          <div className={clsx("row", styles.row)}>
            {renderImage()}
            {renderContent()}
          </div>}
      </div>
    </section>
  );
};

export default SectionItem;
