import React from 'react'
import { Link } from 'react-router-dom'
import { CardArticle, CardArticleSolde } from '../../components/Card'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

function CategoryProducts() {
  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-12">
            <Header />
          </div>

          <div className="col-12">
            <main className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 py-3">
                    <div className="row">
                      <div className="col-12 text-center text-uppercase">
                        <h2>Computers</h2>
                      </div>
                    </div>
                    <div className="row">
                      <CardArticle />
                      <CardArticleSolde />

                      <CardArticle />
                      <CardArticleSolde />

                      <CardArticle />
                      <CardArticleSolde />

                      <CardArticle />
                      <CardArticleSolde />

                      <CardArticle />
                      <CardArticleSolde />

                      <CardArticle />
                      <CardArticleSolde />

                      <CardArticle />
                      <CardArticleSolde />

                      <CardArticle />
                      <CardArticleSolde />

                      <CardArticle />
                      <CardArticleSolde />

                      <CardArticle />
                      <CardArticleSolde />

                      <CardArticle />
                      <CardArticleSolde />

                      <CardArticle />
                      <CardArticleSolde />

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <Link
                        className="page-link"
                        to="#1"
                        tabIndex="-1"
                        aria-disabled="true"
                      >
                        <i className="fas fa-long-arrow-alt-left"></i>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#1">
                        1
                      </Link>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <Link className="page-link" to="#1">
                        2 <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#1">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#1">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </main>
          </div>

          <div className="col-12 align-self-end">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryProducts
