defmodule OcElixir.PageController do
  use OcElixir.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
